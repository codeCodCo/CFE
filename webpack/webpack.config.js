const { Configuration } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
 

/**
* @type {Configuration}
*/

const config = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/, //解析vue 模板
                use: "vue-loader"
            },
            {
                test: /\.less$/, //解析 less
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.css$/, //解析css
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ts$/,  //解析ts
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                message: ['Your application is running here http://localhost:9001']
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src') //别名
        },
        extensions: ['.js', '.json', '.vue', '.ts', '.tsx'] //识别后缀
    },
    stats: "errors-only",
    devServer: {
        proxy: {},
        port: 9091,
        hot: true,
        open:true
    },
    // externals: {
    //     vue: "Vue"//CDN引入
    // }

}

module.exports = config