var path = require("path")
var HtmlWebpackPlugin =  require("html-webpack-plugin")

module.exports = {
    devtool: "source-map",
    entry : "./index.js",
    output : {
        path : path.resolve(__dirname , "build"),
        filename: "index_bundle.js"
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:"babel-loader"},
            {test : /\.(jsx)$/, use:"babel-loader"},
            {test : /\.css$/, use:["style-loader", "css-loader"]}
        ]
    },
    mode:"production",
    plugins : [
        new HtmlWebpackPlugin ({
            template : "index.html"
        })
    ]

}
