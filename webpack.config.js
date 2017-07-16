const prod = process.env.NODE_ENV === "production";
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: !prod
});

let bundleName = prod ? '[name].[hash].js' : '[name].js'

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: bundleName,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: [
                    path.resolve(__dirname, './src/index.html'),
                ],
                use: [
                    {loader: 'ngtemplate-loader'},
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader?cacheDirectory=true',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 9999
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
          template: 'index.html',
          inject: 'body',
        })
    ]
};
