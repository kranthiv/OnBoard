const webpack = require('webpack');
const path = require('path');
const copy = require('copy-webpack-plugin');
module.exports = {
    entry: {
        contentScript: path.resolve(__dirname + '/src/content', 'main.ts'),
        backgroundScript: path.resolve(__dirname + '/src/background', 'main.ts')
    },
    target: 'web',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: 'ts-loader',
            }, {
                enforce: 'pre',
                test: /\.js$/,
                use: "source-map-loader"
            },
            { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] }, 
            { test: /(\.scss)$/, loaders: ['style-loader', 'css-loader','sass-loader'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new copy([
            { from: 'src/manifest.json' }
        ])
    ]
};