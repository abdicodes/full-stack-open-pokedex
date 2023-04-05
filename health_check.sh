#!/bin/bash

response=$(curl -s https://pokkeeddex.fly.dev/health)
if [ "$response" == "ok" ]; then
  exit 0
else
  exit 1
fi