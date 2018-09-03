// conf.js
exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //capabilities: {
  //  'browserName': 'chrome'
  //},
  onPrepare: function() {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'Tests/allure-results'
    }));
  },
  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],
  specs: ['ARD*.js']
};