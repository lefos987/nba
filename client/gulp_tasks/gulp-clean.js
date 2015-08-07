(function () {

    'use strict';

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

        definitionFn('clean:js', 'clean out existing js dist file');
        gulp.task('clean:app', function() {
            return del.sync([config.dirs.dist.js,config.dirs.dist.js + '.map', config.dirs.dist.minjs, config.dirs.dist.minjs + '.map']);
        });

        definitionFn('clean:css', 'clean out existing css dist file');
        gulp.task('clean:css', function() {
            return del.sync([config.dirs.dist.css, config.dirs.dist.css + '.map', config.dirs.dist.mincss, config.dirs.dist.mincss + '.map']);
        });

        definitionFn('clean:index', 'clean index.html');
        gulp.task('clean:index', function() {
            return del.sync(config.dirs.dist.index);
        });

        definitionFn('clean:tpl', 'clean out existing template dist file');
        gulp.task('clean:tpl', function() {
            console.log(config.dirs.dist.templates);
            return del.sync([ config.dirs.dist.templates, config.dirs.dist.minTemplates , config.dirs.dist.minTemplates + '.map' ]);
        });

        definitionFn('clean:vendor', 'clean out existing vendor dist file');
        gulp.task('clean:vendor', function() {
            return del.sync([ config.dirs.dist.root + 'vendor.js', config.dirs.dist.root + 'vendor.css', config.dirs.dist.root + 'vendor.js.map', config.dirs.dist.root + 'vendor.css.map', config.dirs.dist.root + 'vendor.min.js', config.dirs.dist.root + 'vendor.min.css', config.dirs.dist.root + 'vendor.min.js.map', config.dirs.dist.root + 'vendor.min.css.map' ]);
        });

    };

})();