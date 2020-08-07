#!/bin/sh

npm --prefix /app install
node /app/node_modules/playwright/install.js
DEBUG=pw:browser* npm --prefix /app test
