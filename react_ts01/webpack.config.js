/**
 * @author:水痕
 * @time:2017-07-29 11:46
 * @email:332904234@qq.com
 * @version:1.0
 * @fileName:webpack.config.js
 * @title:
 */
'use strict';
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",
    // 忽视文件后缀名
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // 模块加载器
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};