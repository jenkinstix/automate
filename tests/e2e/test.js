module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://localhost:3000/index.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#header', 'Hello World')
      .end();
  }
};