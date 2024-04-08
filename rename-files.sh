#!/bin/bash

images='./public/images/about me'
count=1
for image in "$images"/*; do
    if [ -f "$image" ]; then
        ext=${image##*.}
        mv "$image" "$images/${count}.$ext"
        ((count++))
    fi
done
