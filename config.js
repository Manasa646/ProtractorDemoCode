exports.config={

    framework: 'jasmine',
    directConnect: false,
    baseUrl: 'http://localhost:4200/',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    specs: ['Test Cases/Topics.js'],
    capabilities: {
        browserName: 'chrome'
       /* chromeOptions: {
            args: [
                //"--headless",
                "--disable-gpu",
                "--window-size=1024,768"
            ]
        }*/
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 190000,
   },
    onPrepare: function()
    {
       browser.ignoreSynchronization=false;
//browser.waitForAngularEnabled(true);
    }
}
