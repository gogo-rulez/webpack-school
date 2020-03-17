const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin'); // used for loading dynamic files (with hashes)

module.exports = {

    entry: "./src/index.js",

    module: {
        rules: [
            {
                test: /\.scss$/, // files that end with .scss
                use: [
                    "style-loader", // 3. inject styles into DOM
                    "css-loader", // 2. turns css into common js
                    "sass-loader" // 1. turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: '[name].[hash].[ext]', //[path] will make a folder structure like for the original image
                        outputPath: 'imgs'
                    }
                }
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })]

}