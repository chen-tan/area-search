const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports={
    devtool:"source-map",
    stats:{
        modules:false,
        colors:true
    },
    entry:{
        "list":"@/list/list.js",
        "detail":"@/detail/detail.js"
    },
    output:{
        path: path.resolve(process.cwd(), 'dist'),
        filename:"./script/[name][chunkhash:5].js"
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            template:"./public/list.html",
            filename:"list.html",
            chunks:["list"]
        }),
        new HtmlWebpackPlugin({
            template:"./public/detail.html",
            filename:"detail.html",
            chunks:["detail"]
        }),
        new CopyPlugin({
            patterns: [
              { from: './public', to: './' },
            ],
          }),
    ],
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"src")
        }
    }
}