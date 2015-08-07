(function () {

    'use strict';

    module.exports = function(gulp, config, definitionFn) {

        var path  = require('path');

        definitionFn('copy:dist', 'copy all files of dist folder to server public folder');
        gulp.task('copy:dist', ['copy:index', 'webpack:bundle', 'stylus:dev', 'concat:tpl'], function() {
            return gulp.src(config.dirs.dist.root + '/**/*.*')
                .pipe(gulp.dest(path.resolve('../server/public')));
        });
    };

})();
