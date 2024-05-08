#!/bin/bash

optimised='./public/images/photography'
folder='./public/images/photography/h'

if [ ! -d "$folder" ]; then
    exit 1
fi

for image in "$folder"/*; do
    trap "echo Exited!; exit;" SIGINT SIGTERM
    filename=$(basename "$image")
    if [ -f "$image" ]; then
        convert "$image" -strip -quality 60 -resize 600x600 -interlace JPEG "${optimised}/${filename}"
    fi
done

#400x400 for about 300kb
#tweak resize to reduce size
