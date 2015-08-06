module.exports = function (gulp, config, definitionFn) {

    var eslint  = require('gulp-eslint');

    /**
     * Jshint Tasks
     * -----------
     */

    definitionFn('eslint:app', 'lint only the app JS code');
    gulp.task('eslint:app', function() {

        return gulp
            .src(config.dirs.src.app)
            .pipe(eslint())
            .pipe(eslint.format());
    });

};