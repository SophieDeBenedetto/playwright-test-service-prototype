#!/bin/sh

echo "RUNNING test.sh"
echo "ls:"
echo `ls`
npm install
node ./node_modules/playwright/install.js
npm test
