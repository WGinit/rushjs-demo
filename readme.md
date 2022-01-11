# Rush demo

多项目管理工具

### 目录结构

```javascript
|   README.md
|   rush.json  // 配置文件
|   .gitattributes
|    .travis.yml
|    .gitignore
|
+--apps // 子项目文件夹
|   |   project1 // 项目1文件夹
|   |   project2 // 项目2文件夹
+--common // rush init 生成的rush 配置文件
|   |   temp // 所有的项目包管理
|   |   ...
+--libs  // 公共组件或给第三方包文件夹
    |   util     // 第三方工具文件

```

### 启动运行

> 需提前安装 rush 及 pnpm

```javascript
yarn add @microsoft/rush -g  // 全局安装rush
yarn add pnpm -g  // 全局安装pnpm
```

1、拉取代码

```javascript
mkdir rush-sample
cd rush-sample
git clone https://github.com/WGinit/rushjs-demo.git
```

2、安装依赖

```javascript
rush update --purge  // 更新链接
rush install
```

3、项目打包

```javascript
rush build  // 打包所有的项目

rush build -t project1  // 只打包project1项目
```

4、项目发布

```javascript
rush publish // 发布对rush.json 文件中配置了shouldPublish的包
```
