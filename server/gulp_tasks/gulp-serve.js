module.exports = function (gulp, config, definitionFn) {

    var nodemon = require('nodemon');

    definitionFn('serve', 'start the node.js server');
    gulp.task('serve', ['webpack:watch'], function () {

        nodemon({
            execMap: {
                js: 'node'
            },
            script: config.dirs.dist.root + config.name + '.js',
            ignore: ['*'],
            watch: ['foo/']
        }).on('restart', function () {
            console.log('* Restart *');
        });
    });
};
