module.exports = function (gulp, config, definitionFn) {

    var nodemon       = require('nodemon');
    var webpack       = require('webpack');
    var webpackConfig = require('../config/webpack.dev.conf');

    var onBuild = function (done) {
        return function (err, stats) {
            if (err) {
                console.log('err ->', err);
            }
            else {
                console.log('stats ->', stats.toString());
            }
            if (done) {
                done();
            }
        };
    };

    definitionFn('webpack:bundle', 'start the node.js server');
    gulp.task('webpack:bundle', function (done) {

        webpack(webpackConfig).run(onBuild(done));
    });

    definitionFn('webpack:watch', 'watch for changes');
    gulp.task('webpack:watch', function () {

        webpack(webpackConfig).watch(100, function (err, stats) {
            onBuild()(err, stats);
            nodemon.restart();
        });
    });

};
