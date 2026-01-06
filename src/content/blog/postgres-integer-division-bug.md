
---
layout: ../layouts/BlogPostLayout.astro
title: "The Sneaky Bug: How Integer Division Skewed Our Cost Calculations"
author: Chubi
description: "A deep dive into a perplexing bug in Django ORM cost calculations caused by integer division, and how to fix it."
image:
    url: "/images/blog/2_.jpg"
    alt: "picture of a stones in a pool of blue water"
pubDate: 2025-11-20
tags: ["django", "postgresql", "bugfix", "python", "orm"]
slug: "the-sneaky-bug-how-integer-division-skewed-our-cost-calculations"
---
-----

## The Sneaky Bug: How Integer Division Skewed Our Cost Calculations

We've all been there: staring at two pieces of code that *should* do the exact same thing, yet produce stubbornly different results. Recently, I wrestled with just such a mystery while working on cost calculations in our Django application. The goal was simple: calculate the storage cost for datasets over a given period. The problem? My Django ORM query and a "manual" Python loop verification gave me different totals.

### The Mystery of the Mismatched Costs

I needed a function to calculate the total storage cost for a set of data records within a specific date range. Each record has a size (in bytes), an added date, and an optional deletion date. The cost is based on size, duration stored, and a price per GB per month.

I first implemented this using the Django ORM, leveraging database functions for efficiency. It looked something like this conceptually:

```python
# Simplified ORM approach (Conceptual)
from django.db.models import Sum, F, ExpressionWrapper, FloatField
from django.db.models.functions import ExtractDay

# ... filter records for the date range ...

# Calculate duration in days (simplified)
duration_days = ExtractDay(F('end_date_field') - F('start_date_field'))
size_gb = F('size_in_bytes_field') / (1024*1024*1024) # Bytes to GB
cost_per_month = settings.COST_PER_GB_MONTH

total_cost = records.aggregate(
    total=Sum(
        ExpressionWrapper(
            size_gb * (duration_days / 30) * cost_per_month, # Cost = GB * Months * Rate
            output_field=FloatField()
        )
    )
)['total']

print(f"ORM Calculation: ${total_cost:.2f}")
# Output: ORM Calculation: $5.18
```

To double-check, I wrote a Python loop to perform the same calculation on the same set of records:

```python
# Simplified Python loop verification (Conceptual)
total_cost_py = 0
cost_per_month = settings.COST_PER_GB_MONTH

for record in records:
    # Calculate duration in days (simplified)
    duration_days = (record.end_date_field - record.start_date_field).days
    size_gb = record.size_in_bytes_field / (1024*1024*1024) # Bytes to GB
    
    # Calculate fractional months
    months = duration_days / 30
    
    total_cost_py += size_gb * months * cost_per_month

print(f"Python Loop Calculation: ${total_cost_py:.2f}")
# Output: Python Loop Calculation: $7.71
```

The results were consistently off\! `$5.18` vs. `$7.71`. I checked the filtering logic, the date handling, timezone awareness – everything seemed identical. What was going on?

### The "Aha\!" Moment: Integer vs. Float Division

After much head-scratching, the culprit revealed itself: **integer division**.

In many programming languages and database systems (including Python 2 and standard SQL integer operations), dividing one integer by another integer results in... another integer. Any fractional part is simply discarded (truncated). To get a precise fractional result (a "float"), at least one of the numbers must be a float.

Look closely at these lines:

1.  `size_gb = F('size_in_bytes_field') / (1024*1024*1024)`
2.  `months = duration_days / 30`

In both my ORM query and the initial Python loop:

  * `size_in_bytes_field` was an integer (like Django's `BigIntegerField`).
  * `(1024*1024*1024)` is a large integer.
  * `duration_days` was an integer.
  * `30` is an integer.

Because both sides of the division were integers, the results were being truncated *before* being used in the final cost calculation\!

  * A size of 1.9 GB might have been treated as just 1 GB (`size_gb` truncated).
  * A duration of 59 days resulted in 1 month (`59 / 30` truncated), not 1.966... months.

These small truncations added up across thousands of records, leading to the significant discrepancy.

### The Fix: Forcing Float Division

The solution was simple: ensure at least one number in the division is a float. This forces the calculation to use floating-point arithmetic and preserve the precision.

**Corrected ORM:**

```python
# Note the '.0' added
size_gb = F('size_in_bytes_field') / (1024.0 * 1024.0 * 1024.0) # Or 1024.0**3
cost_per_day = cost_per_month / 30.0 # Calculate a daily rate using float

total_cost = records.aggregate(
    total=Sum(
        ExpressionWrapper(
            size_gb * duration_days * cost_per_day, # Use daily rate
            output_field=FloatField()
        )
        # ... rest of aggregation
    )
)['total']
```

With these `.0` additions, both methods finally produced the same, correct result\!

### A Quick Note on PostgreSQL

It's worth noting that this isn't a quirk where PostgreSQL *always* does integer division. PostgreSQL, like most SQL databases, performs integer division *only* when **both** operands are integers. If even one operand is a float, numeric, or decimal type, it performs standard division. The bug occurred because, in those specific calculations (`size / (1024**3)` and `days / 30`), both sides *were* integers.

### Lessons Learned

This bug hunt was a great reminder of a few key things:

1.  **Numeric Types Matter:** Be mindful of integer vs. float division, especially when dealing with calculations that require precision (like billing\!). When in doubt, explicitly use floats (e.g., `30.0` instead of `30`).
2.  **Verify ORM Logic:** While the Django ORM is powerful, it translates Python into SQL. Sometimes, subtle differences in database function behavior or type handling can lead to unexpected results. Verifying complex ORM queries with equivalent plain Python logic is a valuable debugging technique.
3.  **Small Errors, Big Impact:** Tiny precision losses in intermediate calculations can cascade into significant errors in the final result, especially when aggregating over large datasets.

-----
