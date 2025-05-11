#!/usr/bin/env bash

# use sequential jest tests here
echo "start the app..." && npm run build && npm run test:seq && npm run start &

wait