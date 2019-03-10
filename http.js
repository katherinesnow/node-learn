// nodejs创建服务器
const http = require('http')
// createServer方法返回了一个http.Server对象，
// 这其实是一个创建http服务的捷径，如果我们用以下代码来实现的话，
// 也将一样可行
// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })

//     res.end('hi,nodejs')
// }).listen(3000)
var server = new http.Server()
server.on('request', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end('hi,nodejs')
}).listen(3000)
console.log('服务器正在运行，请在浏览器中输入 http://127.0.0.1:3000')