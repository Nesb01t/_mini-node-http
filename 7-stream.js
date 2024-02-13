const http = require('http');
const fs = require('fs');

/**
 * 基于 stream 的文件读取性能更好
 * 1. 内存效率高
 * 2. 速度更快
 * 3. 方便处理大文件
 * @type {ProxyServer}
 */
const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('./7-stream/hello.png');
    stream.pipe(res);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});