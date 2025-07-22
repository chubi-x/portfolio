
import { defineCollection, z } from 'astro:content';
import {glob} from 'astro/loaders';
const blog = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/blog"}),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.object({url: z.string(), alt: z.string()}),
    description: z.string(),
    pubDate: z.coerce.date(),
    slug: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog};
