const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * (重写 Rewrite) 是服务器内部重定向
 * 用户不会知道这个过程，例如用户请求 /old-path，服务器会返回 /new-path
 */
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;

    // Rewrite /old-path to /new-path
    if (filePath === './old-path') {
        filePath = './new-path';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('File not found');
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});