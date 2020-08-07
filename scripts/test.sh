#!/bin/sh

npm --prefix /app install
node /app/node_modules/playwright/install.js
chown -R root:root /github/home/.cache/ms-playwright/firefox-1122
DEBUG=pw:browser* npm --prefix /app test
