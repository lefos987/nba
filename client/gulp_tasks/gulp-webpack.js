(function () {

    'use strict';

    module.exports = function (gulp, config, definitionFn) {

        var gutil            = require('gulp-util');
        var open             = require('gulp-open');
        var webpack          = require('webpack');
        var webpackConfig    = require('../config/webpack.dev.conf');
        var WebpackDevServer = require('webpack-dev-server');

        var devWebpackCompiler = webpack(webpackConfig);

        definitionFn('webpack:bundle', 'compile and bundle es6 modules');
        gulp.task('webpack:bundle', function (cb) {

            devWebpackCompiler.run(function (err, stats) {
                if (err) { throw new gutil.PluginError('webpack', err); }
                gutil.log('[webpack:build-dev]', stats.toString({ colors: true }));
                cb();
            });
        });

        definitionFn('webpack:server', 'start a web server');
        gulp.task('webpack:server', function () {

            new WebpackDevServer(webpack(webpackConfig), webpackConfig.server)
                .listen(1506, 'localhost', function (err) {
                    if (err) throw new gutil.PluginError('webpack-dev-server', err);
                    gutil.log('[webpack-dev-server]', 'http://localhost:1506/webpack-dev-server/index.html');
                });

            gulp
                .src(config.dirs.dist.index)
                .pipe(open('', {
                    url: 'http://localhost:1506/webpack-dev-server/index.html'
                }));
        });
    };

})();