const http = require('node:http')

/**
 * 通常需要返回一些静态资源，通过 fs 模块读取返回
 * 分别尝试一下返回 hello.html 和 hello.png 文件吧
 */
const fs = require('node:fs')

// const fileContent = fs.readFileSync('./3-file/hello.png')
const fileContent = fs.readFileSync('./3-file/hello.html')


const server = http.createServer((req, res) => {
    res.end(fileContent)
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})