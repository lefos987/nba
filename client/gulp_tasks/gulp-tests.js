(function () {

    'use strict';

    module.exports = function (gulp, config, definitionFn) {

        var KarmaServer = require('karma').Server;
        var path  = require('path');

        /**
         * Testing Tasks
         * -------------
         */

        definitionFn('test:dev', 'run all unit tests in the development environment');
        gulp.task('test:dev', ['jshint:app'], function (done) {

            new KarmaServer({
                configFile: path.resolve(config.dirs.karmaConf),
                autoWatch: true,
                reporters: ['progress']
            }, done).start();
        });

        definitionFn('test:ci', ['jshint:app'], 'run all unit tests in the CI environment');
        gulp.task('test:ci', function (done) {

            new KarmaServer({
                configFile: path.resolve(config.dirs.karmaConf),
                singleRun: true
            }, done).start();
        });

        definitionFn('test:debug', ['jshint:app'], 'run all unit tests in debug mode');
        gulp.task('test:debug', function (done) {

            new KarmaServer({
                configFile: path.resolve(config.dirs.karmaConf),
                browsers: ['Chrome']
            }, done).start();
        });
    };

})();