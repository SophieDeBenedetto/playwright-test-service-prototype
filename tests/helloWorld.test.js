const {chromium, firefox, webkit} = require('playwright');
const expect = require('expect');
let chrome;
let firefoxBrowser;
let webkitBrowser;
let chromePage;
let firefoxPage;
let webkitPage;

beforeAll(async () => {
  chrome = await chromium.launch({
    args: ['--disable-dev-shm-usage', '--no-sandbox']
  });
  firefoxBrowser = await firefox.launch()
  webkitBrowser = await webkit.launch()
});
afterAll(async () => {
  await chrome.close();
  await firefoxBrowser.close();
  await webkitBrowser.close();
});
beforeEach(async () => {
  chromePage = await chrome.newPage();
  firefoxPage = await firefoxBrowser.newPage();
  webkitPage = await webkitBrowser.newPage();
});
afterEach(async () => {
  await chromePage.close();
  await firefoxPage.close();
  await webkitPage.close();
});

it('has the correct title in chromium', async () => {
  await chromePage.goto('https://www.github.com/');
  expect(await chromePage.title()).toBe('The world’s leading software development platform · GitHub');
});

it('has the correct title in firefox', async () => {
  await firefoxPage.goto('https://www.github.com/');
  expect(await firefoxPage.title()).toBe('The world’s leading software development platform · GitHub');
});

it('has the correct title in webkit', async () => {
  await webkitPage.goto('https://www.github.com/');
  expect(await webkitPage.title()).toBe('The world’s leading software development platform · GitHub');
});
