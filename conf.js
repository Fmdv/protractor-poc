exports.config = {
    //Conexão Direta
    directConnect:true,
    //Framework Utilizado
    framework: 'jasmine2',
    //Especificações do teste
    specs:['specs/login-spec.js'],
    //baseUrl: 'https://juliemr.github.io/',
    baseUrl: 'http://mark7.herokuapp.com',

    onPrepare: function(){
        browser.driver.manage().window().maximize();

        //Para aplicações não angular
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.ignoreSynchronization = true;

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec:{
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true,
                displaySuccessful: true
            },
            summary:{
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true,
                displaySuccessful: true
            },
            colors:{
                enabled: true
            }
        }))

        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'reports',
              screenshotsFolder: './shots',
              takeScreenshots: true,
              cleanDestination: true,
              fixedScreenshotName: true
            })
          );
    },
    
    //Capabilities
    capabilities: {
        'browserName': 'chrome'
    }
}