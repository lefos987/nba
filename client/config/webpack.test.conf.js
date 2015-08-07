(function () {

    'use strict';

    module.exports = {
        resolve: {
            extensions: ['', '.js']
        },
        module: {
            loaders: [
                { test: /\.js/, loader: 'babel' }
            ],
            postLoaders: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)\//,
                loader: 'istanbul-instrumenter'
            }]
        }
    }
})();