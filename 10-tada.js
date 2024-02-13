const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * 要创建一个完整的 cli 程序
 * 我们需要通过 process.argv 获取命令行参数
 */
const args = process.argv.slice(2);
const port = args[0] || 3000;
const directory = args[1] || '.';

/**
 * 你可以通过命令行参数指定服务器的端口和读取目录
 * 例如 node 10.js 3000 /path/to/directory
 * 这样就完成了一个极简可配置化的静态资源服务器
 */
const server = http.createServer((req, res) => {
    let filePath = path.join(directory, req.url);

    // Check if file exists
    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.statusCode = 404;
            res.end('File not found');
        } else {
            // Check if filePath is a directory, if so append index.html
            if (stats.isDirectory()) {
                filePath = path.join(filePath, 'index.html');
            }

            // Set Content-Length
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
        }
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});