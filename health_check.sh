#!/bin/bash

response=$(curl -s https://pokkeeddex.fly.dev/health)
if [ "$response" == "ok" ]; then
  exit 1
else
  exit 0
fi