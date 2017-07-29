### 使用`typescript`构建`react`项目环境搭建

### 一、使用`typescript`开发`react`项目常见有两种方式
* 1、使用`webpack`手动配置
* 2、使用`create-react-app`脚手架

### 二、使用`webpack`手动配置
* 1、全局安装`webpack`

    ```
    npm install webpack -g
    # 本人一般会安装这个服务的
    npm install webpack-dev-server -g
    ```
    
* 2、创建一个项目目录
* 3、进入项目文件,在黑窗口中输入命令

    ```
    npm init
    tsc --init //如果tsc --init 提示报错,可能要先全局安装npm install -g typescript
    ```
* 3、安装`react`与`react-dom`包
    ```javascript
    npm install --save react react-dom @types/react @types/react-dom
    ```
    
* 4、安装开发依赖包

    ```javascript
    npm install --save-dev typescript awesome-typescript-loader source-map-loader
    ```

* 5、修改`tsconfig.json`文件
    
    ```json
    {
        "compilerOptions": {
            "outDir": "./dist/",
            "sourceMap": true,
            "noImplicitAny": true,
            "module": "commonjs",
            "target": "es5",
            "jsx": "react"
        },
        "include": [
            "./src/**/*"
        ],
        "exclude": [
            "node_modules"
        ]
    }
    ```
    
* 6、在根目录下创建一个`webpack.config.js`文件

    ```javascript
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
    ```
    
* 7、新建一个`src`文件夹存放所有的`tsx`文件

    ```javascript
    ***Hello.tsx文件***
    import * as React from "react";
    
    // 定义一个接口约束传递进来的参数类型(类似传统js中[组件.propTypes = {})
    export interface HelloProps { compiler: string; framework: string; }
    
    // 定义一个类去继承React.Component
    export class Hello extends React.Component<HelloProps, undefined> {
        render() {
            return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
        }
    }
    ```
    
* 8、主入口文件

    ```javascript
    ***index.tsx***
    import * as React from "react";
    import * as ReactDOM from "react-dom";
    
    // 导入定义的组件  
    import { Hello } from "./components/Hello";
    
    // 渲染到example节点上
    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React" />,
        document.getElementById("example")
    );
    ```
    
* 9、打包，运行
* 10、代码见react_ts01
* 11、项目结构

    ![项目结构](http://img.blog.csdn.net/20170729125823431?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast "")

### 三、使用`create-react-app`构建`react`项目

* 1、全局安装`create-react-app`

    ```javascript
    npm install -g create-react-app
    ```
    
* 2、创建一个项目

    ```javascript
    create-react-app my-app --scripts-version=react-scripts-ts
    ```
    
* 3、运行项目

    ```javascript
    npm run start
    ```
    
* 4、打包项目

    ```javascript
    npm run build
    ```
    
* 5、代码见react_ts02

