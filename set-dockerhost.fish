#!fish
set -x -g DOCKERHOST (ifconfig | grep "inet " | grep -v "127\.0\.0\.1" | head -1 | awk '{ print $2 }')
