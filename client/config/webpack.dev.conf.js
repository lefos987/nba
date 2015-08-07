(function () {

    'use strict';

    var config      = require('./gulp.conf');
    var path        = require('path');
    var webpack     = require('webpack');
    var packageJson = require('../package.json');

    var getVendorPackages = function () {
        var vendorPackages = [];
        var dependencies = packageJson.dependencies;
        for (var key in dependencies) {
            vendorPackages.push(key)
        }
        return vendorPackages;
    };

    module.exports = {
        entry: {
            app:    config.dirs.src.main,
            vendor: getVendorPackages()
        },
        output: {
            path: path.resolve(config.dirs.dist.root),
            filename: config.name + '.js'
        },
        colors: true,
        progress: true,
        module: {
            loaders: [
                {
                    test: /\.js/,
                    exlude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: { compact: false }
                }
            ]
        },
        devtool: 'source-map',
        server: {
            contentBase: config.dirs.dist.root,
            stats: {
                colors: true
            }
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
        ]
    }
})();