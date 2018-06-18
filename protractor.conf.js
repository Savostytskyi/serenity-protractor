const crew = require('serenity-js/lib/stage_crew');

exports.config = {

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),
    baseUrl: 'https://angular.io/',

    allScriptsTimeout: 110000,

    specs: [ 'features/**/*.feature' ],
    cucumberOpts: {
        require:    [ 'features/**/*.ts',
        'features/**/*.js' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
    },

    serenity: {
        dialect: 'cucumber',
        crew: [
            crew.serenityBDDReporter()
            ,
             crew.consoleReporter(),
             crew.Photographer.who(_ => _
                 .takesPhotosOf(_.Failures)
                 .takesPhotosWhen(_.Activity_Finishes)
             )
        ]
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        },

        // execute tests using 2 browsers running in parallel
        //shardTestFiles: true,
       // maxInstances: 2
    },

    restartBrowserBetweenTests: true
};