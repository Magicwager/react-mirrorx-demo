//服务器配置
const svrConfig = {
    host: "127.0.0.1",
    port: 3000,
    mockenable: true,//是否启用本地模拟数据
    proName: '/react-mirrorx-demo',//项目名称
    staticFolder: "dist"//静态资源托管目录
};
//代理配置，可以为空数组
const proxyConfig = [{
    enable: true,//是否代理
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