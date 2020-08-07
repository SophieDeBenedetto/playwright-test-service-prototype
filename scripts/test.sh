#!/bin/sh

npm --prefix /app install
node /app/node_modules/playwright/install.js
npm --prefix /app test
