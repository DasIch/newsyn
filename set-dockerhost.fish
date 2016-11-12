#!fish
set -x -g DOCKERHOST (ifconfig en0 inet | grep "inet " | awk '{ print $2 }')
