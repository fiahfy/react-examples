/*globals jasmine*/

jest.autoMockOff();

var jasmineReporters = require('jasmine-reporters');

var reporter = new jasmineReporters.JUnitXmlReporter({
  consolidateAll: false,
  savePath: 'test-reports/'
});

jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(reporter);
