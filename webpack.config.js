const webpack =  require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports= {
    entry:[
        path.resolve(__dirname+'/src','main.ts')
    ],
    target:'web',
    output:{
        path:__dirname + '/dist',
        filename:'main.js'
    },
    module:{
        rules:[
                {
                 enforce:'pre',
                 test : /\.tsx?$/,
                 use:'ts-loader',
                },{
                    enforce:'pre',
                    test:/\.js$/,
                    use:"source-map-loader"
                }
        ]
    },
    resolve:{
        extensions:[".tsx",".ts",".js"]
    },
    devtool:'inline-source-map',
    plugins: [
    new UglifyJSPlugin()
  ]
};