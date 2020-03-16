const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {

    mode: "production", // this output will not be minified
    //devtool: "none", // will remove eval from output code

    output: {
        filename: "main.[contentHash].js", //name of the outputed file, contentHash will add a hash to the filename
        path: path.resolve(__dirname, "dist") //__dirname is current directory name, dist is the name of the output folder
    },

});