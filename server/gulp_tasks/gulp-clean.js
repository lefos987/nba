module.exports = function(gulp, config, definitionFn) {

    var del = require('del');

    /**
     * Clean Tasks
     * -----------
     * Note: We use del.sync to avoid EEXIST errors
     */

    definitionFn('clean:all', 'clean out all existing dist files');
    gulp.task('clean:all', function() {
        return del.sync(config.dirs.dist.root);
    });

};