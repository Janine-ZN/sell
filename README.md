# sell

> 一个关于外卖的APP

## 一、安装准备
> 在使用vue-cli搭建项目前，需要准备下面的环境：
1. nodejs
2. vue-cli
3. webpack （初始化项目的时候，也有可能被安装好了）

&nbsp;&nbsp;&nbsp;&nbsp;具体操作如下：
1. 在 `nodejs` 官网：https://nodejs.org/en/ 下载 `nodejs` 的安装包，进行安装。
2. 使用如下命令行，全局安装 `vue-cli`：
```powershell
npm intall vue-cli -g    # 如果 npm 不行，请使用淘宝镜像 cnpm 是一样的
```
3. 使用如下命令行，安装 `webpack`
```powershell
npm install webpack   # 下载 webpack 最新版本(执行这句话可以自动下载webpack最新版本)
```
4. 最后一步，全局安装 `vue-cli` 脚手架工具
```powershell
npm install vue-cli -g   # 下载 webpack 最新版本(执行这句话可以自动下载webpack最新版本)
```


## 二、安装后检查
检查是否安装成功
1. node
```powershell
node -v
```

2. 查看 `vue-cli` 是否成功，不能检查 `vue-cli`，需要检查 `vue`
```powershell
vue -V  # 查看 vue 的版本
```
或者直接 `vue` 和 `vue list` 一下，出现下图内容，说明 vue-cli安装成功！
![vue版本号](https://github.com/Janine-ZN/picture/blob/master/vue.png?raw=true)

##### vue list
![vue list](https://github.com/Janine-ZN/picture/blob/master/vue_list.png?raw=true)

## 三、初始化项目
```powershell
vue init webpack 项目名称
```
安装过程中有些问题，按照下列方式执行即可，如果需要ESlint代码检测可以选择Y，一般执行这些就差不多了
![vue-cli安装中的问题](https://github.com/Janine-ZN/picture/blob/master/%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE.png?raw=true)


## 四、项目目录

下面讲一下vue-cli项目的目录结构，重点掌握src文件夹中的内容。
![vue-cli目录结构](https://github.com/Janine-ZN/picture/blob/master/%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95.png?raw=true)



提示:安装依赖
进入项目根目录
```powershell
npm install     # 安装依赖
# 如果在开发过程中还缺别的包，进入node_modules目录下进行安装，例如：vue-router
npm install vue-router
```

安装指定版本的依赖包
```powershell
npm install vue-router@版本号
```
或者在package.json中添加版本信息，然后再执行 npm install vue-router
![依赖包](https://github.com/Janine-ZN/picture/blob/master/%E6%B7%BB%E5%8A%A0%E4%BE%9D%E8%B5%96%E5%8C%85.png?raw=true)



3.node_modules——[依赖包]node_modules里面是项目依赖包，其中包括很多基础依赖，自己也可以根据需要安装其他依赖。安装方法为打开cmd，进入项目目录，输入npm install [依赖包名称],回车。在两种情况下我们会自己去安装依赖：（1）项目运行缺少该依赖包：例如项目加载外部css会用到的css-loader，路由跳转vue-loader等（安装方法示例：npm install css-loader）（2）安装插件：如vux（基于WEUI的移动端组件库），vue-swiper（轮播插件）注：有时会安装指定依赖版本，需在依赖包名称后加上版本号信息，如安装11.1.4版本的vue-loader，输入npm install vue-loader@11.1.4


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).







