#!/usr/bin/env bash
echo "start the app..." && npm run build && npm run test && npm run start &

wait