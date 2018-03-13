# React-mirrorx-demo

基于`proxy-mock-middleware` +`webpack` + `react` + `bee` + `mirrorx` 搭建的一个前端项目示例，为了方便有一定react基础的猿友们进一步熟悉建立在react技术栈的实践。

### 说明

- 本项目应用了[proxy-mock-middleware](https://www.npmjs.com/package/proxy-mock-middleware)，可以进行远程服务代理以及本地数据模拟。也支持[数据模拟平台](http://yapi.demo.qunar.com/)来做数据模拟，只需要在代理配置上做一层配置，具体用法在项目中会详细说明。

- 集成市面上常规的webpack插件等配置，可以满足常规开发需求，无需繁琐复杂的配置项，简单、干净、舒服.

- 应用了阿里的mirrorx框架来做应用状态管理。

### 安装与使用

1. 下载本仓库 `npm install` 安装依赖.

2. 启动开发调试服务 `npm run dev`.

3. 构建静态资源服务 `npm run build`.

### 特性

- `react`、`mirrorx`、`react-router v4`、`webpack`.
- `babel`、`ES7`、`Postcss`、`Less`、`Png\Jpg\Svg\Woff`.

### 资源说明

```base
root
├── mock                          # 本地数据模拟
│   └── user
└── src                           # 项目源代码
    ├── components                # 公共提取复用组件
    │   └── Reference             # 演示使用参照组件
    ├── layout                    # 布局组件
    ├── modules                   # 业务模块
    │   └── bdm                   # 具体业务模块
    │       ├── components        # 业务级别复用组件
    │       │   └── User          # 演示组件
    │       ├── containers        # 容器类组件
    │       ├── models            # 数据模型
    │       └── services          # 数据请求服务
    ├── routes                    # 路由表
    ├── static                    # 资源
    │   ├── font
    │   └── images
    └── utils                     # 工具类

```

### 预览



#### 常见问题说明

1. 服务器IP和端口修改：

  ```js
  //服务启动设置
  const svrConfig = {
    host: "127.0.0.1",
    port: 3000
  };
  ```

2. 代理服务的设置：

  ```js
  //远程代理访问，可以配置多个代理服务
  const proxyConfig = [{
    enable: true,
    router: "/api/*",
    url: "http://cnodejs.org"
  },{
    enable: true,
    router: ["/users/*", "/orgs/*"],
    url: "https://api.github.com"
  },{
    enable: true,
    router: '/mes/*',
    url: "http://10.11.113.33:8080"
  }];
  ```

3. 开发监视控制台

```bash
http://localhost:3000/    #开发访问地址
http://localhost:8888/    #监视访问地址
```
