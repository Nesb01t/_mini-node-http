const http = require('http');
const fs = require('fs');

/**
 * 基于 stream 的 Content-Length 计算
 * cli 指令 Example: curl -vvv localhost:3000/7-stream/hello.png
 */
const server = http.createServer((req, res) => {
    // Assuming files are in the same directory as your index.js file
    // At here, index.js is 8-stream-ctx-length.js
    const filePath = '.' + req.url;

    // calc the file size
    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.statusCode = 404;
            res.end('File not found');
        } else {
            res.setHeader('Content-Length', stats.size);
            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})