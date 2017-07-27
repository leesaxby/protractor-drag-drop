exports.config = {

    allScriptsTimeout: 11000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
        args: [ '--window-size=1600x1080' ]
        },
        shardTestFiles: true,
        maxInstances: 8
    },

    specs: ['./test/e2e/**/*.spec.js'],

    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },

    loggingPrefs: {
      'driver': 'ALL',
      'server': 'ALL',
      'browser': 'ALL'
    }

};
