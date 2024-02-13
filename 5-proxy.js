const http = require('node:http');
const httpProxy = require('http-proxy');

/**
 * 通过创建代理，将 8000 端口的请求代理到 3000 端口
 * 但还有一些问题较难解决
 * 1. TLS、GZIP、HTTP/2 等功能
 * 2. 路由不同的请求到不同的服务器
 *
 * 除非你不介意别人用端口号访问你的网站，且不介意性能问题
 * 就像为什么不推荐在服务器中直接用 ts-node 运行代码
 *
 * 1. 每次运行的时候都要转译到 js 再返回，消耗性能
 * 2. 运行时报错会直接崩掉服务器
 * 3. 各方面的兼容性差
 */
const proxy = httpProxy.createProxyServer({});

http.createServer(function (req, res) {
    proxy.web(req, res, {target: 'http://localhost:3000'});
}).listen(8000);

console.log('Proxy server is running on port 8000');