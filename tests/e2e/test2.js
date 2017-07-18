module.exports = {
  'Body Color' : function (browser) {
    browser
      .url('http://localhost:3000/index.html')
      .waitForElementVisible('body', 1000)
      .assert.elementNotPresent(".should_not_exist")
      .end();
  }
};