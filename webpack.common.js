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
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })]

}