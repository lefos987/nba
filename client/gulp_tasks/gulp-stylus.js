(function () {
    'use strict';

    module.exports = function (gulp, config, definitionFn) {

        var stylus              = require('gulp-stylus');
        var sourcemaps          = require('gulp-sourcemaps');
        var rename              = require("gulp-rename");
        var stylusConfig        = require('../config/stylus.dev.conf');
        var prodStylusConfig    = require('../config/stylus.prod.conf');

        /**
         * Stylus Tasks
         * ------------
         */

        definitionFn('stylus:dev', 'compile stylus files into CSS');
        gulp.task('stylus:dev', ['clean:css'], function() {

            return gulp
                .src(config.dirs.src.styl)
                .pipe(sourcemaps.init())
                .pipe(stylus(stylusConfig))
                .pipe(rename(config.dirs.dist.css))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./'));

        });

        definitionFn('stylus:prod', 'compile stylus and minify files into CSS');
        gulp.task('stylus:prod', ['clean:css'], function() {

            return gulp
                .src(config.dirs.src.styl)
                .pipe(sourcemaps.init())
                .pipe(stylus(prodStylusConfig))
                .pipe(rename(config.dirs.dist.mincss))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./'));

        });
    };

})();