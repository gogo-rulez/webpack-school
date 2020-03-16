const path = require("path");

module.exports = {

    mode: "development", // this output will not be minified
    //devtool: "none", // will remove eval from output code

    entry: "./src/index.js",
    output: {
        filename: "main.js", //name of the outputed file
        path: path.resolve(__dirname, "dist") //__dirname is current directory name, dist is the name of the output folder
    },



}