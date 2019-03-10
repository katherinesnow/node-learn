var http = require('http')
var options = {
    host: '127.0.0.1',
    port: 3000,
}

var req = http.request(options, function(res) {
    res.setEncoding('utf-8')
    res.on('data', function(chunk) {
        // 服务端返回数据chunk
        console.log(chunk.toString())
    })
    console.log(res, '=====res')
    console.log(res.statusCode) // on('data') 回调是异步执行，所以会先执行
})

req.on('error', function(err) {
    console.log(err.message)
})

req.end()