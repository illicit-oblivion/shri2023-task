const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './index.jsx',
    mode: "production",
    module: {
        rules: [
            {test: /\.svg$/, use: "@svgr/webpack"},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/react"
                        ]
                    },
                },
            }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new MiniCssExtractPlugin()
    ],
}
