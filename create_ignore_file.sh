#!/bin/bash

cd "`dirname \"$0\"`"

find -size +49M -regextype posix-extended -regex '\./[^.].*' | sed 's/^\.//' | tee .gitignore


