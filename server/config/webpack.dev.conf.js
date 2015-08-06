var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var config = require('./gulp.conf');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: config.dirs.src.main,
    target: 'node',
    output: {
        path: path.resolve(config.dirs.dist.root),
        filename: config.name + '.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
        ]
    },
    externals: nodeModules,
    devtool: 'sourcemap'
}