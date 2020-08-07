const {chromium, firefox, webkit} = require('playwright');
const expect = require('expect');
let chrome;
let firefoxBrowser;
let webkitBrowser;
let chromePage;
let firefoxPage;
let webkitPage;

describe('chrome', () => {
  beforeAll(async () => {
    chrome = await chromium.launch({
      args: ['--disable-dev-shm-usage', '--no-sandbox']
    });
  });
  afterAll(async () => {
    await chrome.close();
  });
  beforeEach(async () => {
    chromePage = await chrome.newPage();
  });
  afterEach(async () => {
    await chromePage.close();
  });

  test('has the correct title', async () => {
    await chromePage.goto('https://www.github.com/');
    expect(await chromePage.title()).toBe('The world’s leading software development platform · GitHub');
  });
});

describe('firefox', () => {
  beforeAll(async () => {
    firefoxBrowser = await firefox.launch();
  });
  afterAll(async () => {
    await firefoxBrowser.close();
  });
  beforeEach(async () => {
    firefoxPage = await firefoxBrowser.newPage();
  });
  afterEach(async () => {
    await firefoxPage.close();
  });

  test('has the correct title', async () => {
    await firefoxPage.goto('https://www.github.com/');
    expect(await firefoxPage.title()).toBe('The world’s leading software development platform · GitHub');
  });
});

describe('webkit', () => {
  beforeAll(async () => {
    webkitBrowser = await webkit.launch();
  });
  afterAll(async () => {
    await webkitBrowser.close();
  });
  beforeEach(async () => {
    webkitPage = await webkitBrowser.newPage();
  });
  afterEach(async () => {
    await webkitPage.close();
  });

  test('has the correct title', async () => {
    await webkitPage.goto('https://www.github.com/');
    expect(await webkitPage.title()).toBe('The world’s leading software development platform · GitHub');
  });
});
