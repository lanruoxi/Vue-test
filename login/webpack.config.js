'use strict';

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry:{
        'main':'./src/main.js'
    },
    output:{
        // 资源路径
        path:path.join(__dirname,'dist'),
        // 产出的js文件名
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                //处理css文件
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                // 处理less文件
                test:/\.less$/,
               loader:'style-loader!css-loader!less-loader'
            },
            {
                // 处理图片
                test:/\.(jpg|png|svg|gif|ttf)$/,
                loader:'url-loader',
                options:{
                    //如果文件超过limit，生成新文件，否则以base64编码
                    limit:4096,
                    // 拼接时用上原文件名
                    name:'[name].[ext]',
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                // 处理es6文件
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]

}