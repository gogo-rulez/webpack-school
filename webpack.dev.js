const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {

    mode: "development", // this output will not be minified
    //devtool: "none", // will remove eval from output code

    output: {
        filename: "[name].bundle.js", //name of the outputed file, [name] will be vendor or main
        path: path.resolve(__dirname, "dist") //__dirname is current directory name, dist is the name of the output folder
    },

});