// conf.js
exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],
  specs: ['ARD*.js']
}