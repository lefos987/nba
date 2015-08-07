(function () {

    'use strict';

    module.exports = function (gulp, config, definitionFn) {

        var eslint  = require('gulp-eslint');

        /**
         * Jshint Tasks
         * -----------
         */

        definitionFn('eslint:app', 'lin only the app JS code');
        gulp.task('eslint:app', function() {

            return gulp
                .src(config.dirs.src.app)
                .pipe(eslint())
                .pipe(eslint.format());
        });

        definitionFn('eslint:tests', 'lint only the unit test JS code');
        gulp.task('eslint:tests', function() {

            return gulp
                .src(config.dirs.src.tests)
                .pipe(eslint())
                .pipe(eslint.format());

        });

        definitionFn('eslint:all', 'lint all JS code');
        gulp.task('eslint:all', ['eslint:app','eslint:tests']);
    };



})();
