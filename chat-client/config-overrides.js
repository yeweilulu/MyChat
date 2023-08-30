const path = require('path')
// const webpack = require('webpack')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin') // 采用缓存提升打包速度
// const ProgressBarPlugin = require('progress-bar-webpack-plugin') // 开启打包和开发进度条
// const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清除上次打包的文件夹
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 查看打包后各依赖体积
// const CompressionPlugin = require("compression-webpack-plugin");
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 查看打包过程中的时间花费
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const smp = new SpeedMeasurePlugin()
const {
    override,
    // fixBabelImports,
    addWebpackAlias,
    // addWebpackPlugin,
    // overrideDevServer
} = require('customize-cra')
// const isProduction = process.env.NODE_ENV === 'production'
// let analyzer_type = process.env.ANALYZER_ENV

const config = {
    webpack: override(
        // 配置按需引入,antd
        // fixBabelImports('import', {
        //     libraryName: 'antd',
        //     style: true
        // }),
        // addWebpackPlugin(
        //     new UglifyJsPlugin({
        //         // 开启打包缓存
        //         cache: true,
        //         // 开启多线程打包
        //         parallel: true,
        //         uglifyOptions: {
        //             // 删除警告
        //             warnings: false,
        //             // 压缩
        //             compress: {
        //                 // 移除console
        //                 drop_console: true,
        //                 // 移除debugger
        //                 drop_debugger: true
        //             }
        //         }
        //     })
        // ),
        // 别名配置
        addWebpackAlias({
            '@': path.resolve(__dirname, './src')
        }),
        //     addWebpackPlugin(
        //         new CompressionPlugin({
        //             filename: '[path][base].gz', //  使得多个.gz文件合并成一个文件，这种方式压缩后的文件少，建议使用
        //             algorithm: 'gzip', // 官方默认压缩算法也是gzip
        //             test: /\.js$|\.css$|\.html$|\.ttf$|\.eot$|\.woff$/, // 使用正则给匹配到的文件做压缩，这里是给html、css、js以及字体（.ttf和.woff和.eot）做压缩
        //             threshold: 10240, //以字节为单位压缩超过此大小的文件，使用默认值10240吧
        //             minRatio: 0.8, // 最小压缩比率，官方默认0.8
        //             //是否删除原有静态资源文件，即只保留压缩后的.gz文件，建议这个置为false，还保留源文件。以防：
        //             // 假如出现访问.gz文件访问不到的时候，还可以访问源文件双重保障
        //             deleteOriginalAssets: false
        //         }),
        //     ),
        //     addWebpackPlugin(
        //         // 配置环境变量
        //         new webpack.DefinePlugin({
        //             'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        //         })
        //     ),
        //     addWebpackPlugin(
        //         // 添加打包进度条
        //         new ProgressBarPlugin(),
        //         new HardSourceWebpackPlugin() // 打包缓存，优化性能
        //     ),
        //     analyzer_type &&
        //     addWebpackPlugin(
        //         new BundleAnalyzerPlugin({
        //             analyzerPort: 8889, // 指定端口号
        //             openAnalyzer: true
        //         })
        //     ),
        //     // 每次打包都清空dist文件
        //     isProduction && addWebpackPlugin(new CleanWebpackPlugin()),
        //     (config) => { //暴露webpack的配置 config .evn
        //         // 去掉打包生产map 文件
        //         if (process.env.NODE_ENV === "production") config.devtool = false;
        //         return config
        //     }
        // ),
        // // 开发环境配置
        // devServer: overrideDevServer((config) => {
        //     config.proxy = {
        //         '/api': {
        //             target: '*********',
        //             changeOrigin: true,
        //             secure: false,
        //             pathRewrite: {
        //                 '^/api': ''
        //             }
        //         }
        //     }
        // return config
        // }
    )
}

module.exports = config