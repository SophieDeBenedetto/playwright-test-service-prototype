#!/bin/sh

echo "RUNNING test.sh"
echo "ls:"
echo `ls`
npm --prefix /app install
node /app/node_modules/playwright/install.js
npm --prefix /app test
