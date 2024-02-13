const http = require('node:http')

/**
 * 通过 curl -vvv localhost:3000
 * 获得报文，并获得响应 Hello, World!
 * @author nesb01t
 */
const server = http.createServer((req, res) => {
    res.end('Hello, World!')
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})