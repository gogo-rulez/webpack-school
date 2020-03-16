const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin'); // used for loading dynamic files (with hashes)

module.exports = {

    mode: "development", // this output will not be minified
    //devtool: "none", // will remove eval from output code

    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js", //name of the outputed file, contentHash will add a hash to the filename
        path: path.resolve(__dirname, "dist") //__dirname is current directory name, dist is the name of the output folder
    },

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