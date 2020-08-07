#!/bin/sh

npm --prefix /app install
node /app/node_modules/playwright/install.js
chown -R $USER:$USER /github/home/.cache/ms-playwright/firefox-1122
chown -R $USER:$USER /github/home/.cache/ms-playwright/firefox-1122/firefox/firefox
DEBUG=pw:browser* npm --prefix /app test
