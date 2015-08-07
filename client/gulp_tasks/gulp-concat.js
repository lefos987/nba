(function () {

    'use strict';

    module.exports = function (gulp, config, definitionFn) {

        var concat          = require('gulp-concat');
        var sourcemaps      = require('gulp-sourcemaps');
        var ngHtml2Js       = require('gulp-ng-html2js');

        definitionFn('concat:tpl', 'concatenate all template files and construct js');
        gulp.task('concat:tpl', function() {

            return gulp
                .src(config.dirs.src.templates)
                .pipe(ngHtml2Js({
                    moduleName: config.name + ".templates",
                    prefix: "/src/app/"
                }))
                .pipe(sourcemaps.init())
                .pipe(concat(config.name + '.tpls.js'))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest(config.dirs.dist.root));
        });

    };

})();