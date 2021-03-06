(function() {
    'use strict';

    var _ = require('lodash');
    var fs = require('fs');
    var gulp = require('gulp');
    var util = require('gulp-util');

    var gulpTasksDir = './gulp_tasks/';
    var gulpTaskFiles = fs.readdirSync(gulpTasksDir);

    var config        = require('./config/gulp.conf.js');

    /**
     * Help Definitions
     * ----------------
     */

    var definitions = [];
    var define = function(taskName, taskDescription) {
        definitions.push({
            name: taskName,
            description: taskDescription
        });
    };

    define('help', 'list of gulp tasks');

    gulp.task('help', function() {
        util.log('\n\nnba > Help:\n');
        _.each(definitions, function(definition) {
            var name = util.colors.yellow(definition.name);
            util.log(name + ":  " + definition.description);
        });
        util.log('\n\n');
    });

    _.each(gulpTaskFiles, function(gulpTaskFile) {
        var task = gulpTaskFile.split('.')[0];
        require(gulpTasksDir + task)(gulp, config, define);
    });


    /**
     * Workflows
     * ---------
     */

    define('develop', 'perform required tasks during development');
    gulp.task('develop', ['clean:all', 'copy:index', 'eslint:app', 'webpack:bundle', 'stylus:dev', 'concat:tpl', 'webpack:server', 'watch:app']);

    define('build:dev', 'perform jshint, then build local styles, app, and templates');
    gulp.task('build:dev', ['clean:all', 'copy:index', 'eslint:all', 'webpack:bundle', 'stylus:dev', 'concat:tpl', 'copy:dist']);

}());