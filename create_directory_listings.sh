#!/bin/bash

cd "`dirname \"$0\"`"

IFS=$'\n'

cd web

generated_line="<!-- GENERATED INDEX FILE -->"

for directory in `find -type d`
do
  index_file="$directory/index.html"
  if ! [ -f "$index_file" ] || cat "$index_file" | grep -q -w "$generated_line"
  then
    echo "$index_file"
    echo "<html>
            <head>
              <meta charset=\"UTF-8\" />
              <title>$directory</title>
            </head>
            <body>
              $generated_line
              <h1>Directory listing for $directory</h1>
              <hr />
              <pre>
  &#x1f4c2;  <a href=\"..\">..</a>" > $index_file
    for entry in `ls "$directory"`
    do
      if [ "$entry" == "index.html" ]
      then
        continue
      fi
      path="$directory/$entry"
      if [ -d "$path" ]
      then
        echo "  &#x1f4c2;  <a href=\"$entry\">$entry</a>" >> $index_file
      else
        echo "  &#x1f4c4;  <a href=\"$entry\">$entry</a>" >> $index_file
      fi
    done
    echo "    </pre>
              <hr />
            </body>
          </html>" >> $index_file
  fi
done



