const webpack =  require('webpack');
const path = require('path');
const copy = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports= {
    entry:{
        contentScript: path.resolve(__dirname+'/src/content','contentScript.ts'),
        backgroundScript:path.resolve(__dirname+'/src/background','main.ts')
    },
    target:'web',
    output:{
        path:__dirname + '/dist',
        filename:'[name].js'
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
    new UglifyJSPlugin(),
    new copy([
        {from:'src/manifest.json'}
    ])
  ]
};