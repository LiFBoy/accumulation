'use strict';

var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.dev.config');
// "dev": "webpack-dev-server --devtool eval --progress --colors --hot  --content-base build",
new WebpackDevServer(webpack(config), {
    devtool: config.devtool,
    contentBase: config.pathToBuild,
    publicPath: config.output.publicPath,
    quiet: false,
    noInfo: false,
    hot: true,
    historyApiFallback: true,
    proxy: {
            '/act': {
                target: 'http://192.168.1.160:8100/advert',
                secure: false,
            }
            },
    stats: {
        colors: true,
        progress: true
    }
}).listen(8014,'192.198.0.172');