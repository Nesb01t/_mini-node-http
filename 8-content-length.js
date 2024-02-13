const http = require('http');

/**
 * 基于 stream 的服务器发送响应时仍然会计算 Content-Length
 * 这对客户端来说是非常有用的信息
 * 1. 客户端可以通过 Content-Length 来判断是否接收完整的响应，提前分配内存
 * 2. 通过 Content-Length 进行进度追踪
 * 3. Content-Length 可以帮助客户端确定顶什么时候响应结束
 */
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});