const path = require("path")
const webpack = require("webpack")
module.exports = {
    rules: [
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    ],
    entry: './src/client/index.js'
}