const http = require('node:http')

/**
 * 同样的，但是这次在浏览器打开，可以看到页面渲染的 Hello, World 了！
 * @author nesb01t
 */
const htmlContent = `
<!DOCTYPE html>
<html lang="cn">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  Hello, World!
</body>
</html>
`

const server = http.createServer((req, res) => {
    res.end(htmlContent)
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})