#!/bin/bash

optimised='./public/images/about me/optimised'
folder='./public/images/about me'

if [ ! -d "$folder" ]; then
    exit 1
fi

for image in "$folder"/*; do
    trap "echo Exited!; exit;" SIGINT SIGTERM
    filename=$(basename "$image")
    if [ -f "$image" ]; then
        convert "$image" -strip -quality 50 -resize 300x300 -interlace JPEG "${optimised}/${filename}"
    fi
done

#400x400 for about 300kb
#tweak resize to reduce size
