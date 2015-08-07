(function () {

    'use strict';

    module.exports = function(gulp, config, definitionFn) {

        definitionFn('copy:index', 'copy index.html to dist folder');
        gulp.task('copy:index', ['clean:index'], function() {
            return gulp.src(config.dirs.src.index)
                .pipe(gulp.dest(config.dirs.dist.root));
        });
    };

})();
