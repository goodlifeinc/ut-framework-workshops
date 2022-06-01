// Imports: Dependencies
const path = require('path');
require('babel-register');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Webpack Configuration
const config = {

    // Entry
    entry: './src/js/index.js',
    // Output
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/bundle.js',
    },
    // Loaders
    module: {
        rules: [
            // JavaScript/JSX Files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // CSS Files
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            // Mustache Templates loader
            {
                test: /\.mustache.html$/,
                loader: 'mustache-loader'
                // loader: 'mustache-loader?minify'
                // loader: 'mustache-loader?{ minify: { removeComments: false } }'
                // loader: 'mustache-loader?noShortcut'
            }
        ]
    },
    // Plugins
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'My App',
            filename: 'index.html'
        })
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'https://date.nager.at/Api/v2',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        },
    }
};
// Exports
module.exports = config;