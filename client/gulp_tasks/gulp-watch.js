(function () {

    'use strict';

    module.exports = function (gulp, config, definitionFn) {

        /**
         * Watch Tasks
         * -----------
         */

        definitionFn('watch:app', 'watch app files for changes');
        gulp.task('watch:app', function () {

            gulp.watch(config.dirs.src.app, ['eslint:app', 'webpack:bundle', 'concat:tpl']);
            gulp.watch(config.dirs.src.templates, ['concat:tpl']);
            gulp.watch(config.dirs.src.index, ['copy:index']);
            gulp.watch(config.dirs.src.styl, ['stylus:dev']);
        });

    };

})();