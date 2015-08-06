module.exports = function (gulp, config, definitionFn) {

    /**
    * Watch Tasks
    * -----------
    */

    definitionFn('watch:server', 'watch server files for changes');
    gulp.task('watch:server', function () {

        gulp.watch(config.dirs.src.app, ['clean:all', 'eslint:app', 'webpack:bundle']);

    });

};