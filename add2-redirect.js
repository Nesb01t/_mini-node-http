const http = require('http');

/**
 * (重定向 Redirect) 服务器向客户端发送指示，告诉客户端需要请求新的 URL
 * 在客户的角度来看，重写往往是透明的，客户不知道这个过程，因为 URL 都不会改变
 * 1. 永久移动，需要用 301 重新定向
 * 2. 临时移动，302
 * 3. 域名更改时
 * 4. 希望用户只能通过 HTTPS 访问
 */
const server = http.createServer((req, res) => {
    const oldPath = '/old-path';
    const newPath = '/new-path';

    if (req.url === oldPath) {
        res.writeHead(301, {'Location': newPath});
        res.end();
    } else {
        // Handle other requests...
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});