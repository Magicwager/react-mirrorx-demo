
//服务器配置
const svrConfig = {
    host: "127.0.0.1",//必须配置项
    port: 3000,//必须配置项
    mockenable: false,
    buildTool: "webpack",//必须配置项，使用的构建工具名称，只能是'webpack'或'gulp'
    staticFolder: "dist",//静态资源托管目录
    webpackCfgName: "webpack.dev.config.js"//webpack的开发配置文件，buildTool参数为‘webpack’时才配置
};
//代理配置，可以同时多个代理，可以为空数组
const proxyConfig = [{
    enable: false,//是否代理
    router: "/uitemplate_web",//代理目录
    url: "http://workbenchdev.yyuap.com"//代理远程地址
}]
//本地模拟配置
const mockConfig = {
    "GET": [{
        "/local/user/get": "./mock/user/get.json"
    }],
    "POST": [{
        "/local/user/post": "./mock/user/post.json",
    }]
};
module.exports = {
    svrConfig: svrConfig,
    proxyConfig: proxyConfig,
    mockConfig: mockConfig
};