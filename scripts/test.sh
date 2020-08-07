#!/bin/sh

set -ve

mkdir -p /app/artifacts/screenshots
node /app/node_modules/playwright/install.js
DEBUG=pw:browser* npm --prefix /app test
