// 创建文件浏览服务器
let http = require('http')
let fs = require('fs')
let path = require('path')

let server = http.createServer(function(req, res) {
    if(req.url === '/favicon.ico') {
        res.end('')
        return
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    showDir(req,res)
}).listen(5000)
console.log('服务器正在运行，请在浏览器中输入 http://127.0.0.1:5000')
function showDir(req, res) {
    let target = 'test'
    if(req.url != '/') {
        target = req.url
    }

    let s = target.substring(target.indexOf('/') + 1)
    console.log(s)
    fs.readdir(s, (err, files) => {
        let listr = ''
        files.forEach(f => {
            let fpath = path.join('./', target, f)
            console.log(path)
            //用了同步代码
            let stat = fs.statSync(fpath);
            if(stat.isDirectory()){
                //4. 应该拼上a标签
                // console.log(fpath);
                //4. 这里要换成f的那个文件名
                listr += `<li><a href="${fpath}">${f}</a></li>`
            } else {
                //不拼a标签
                listr += `<li>${f}</li>`
            }
        })
        res.end(makeHtml(listr))
    })
}

function makeHtml(lis) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>标题</title>
            <style type="text/css">
                *{padding: 0; margin: 0}
                ul>li{
                    list-style: none;
                }
                
                li{
                    padding: .6rem 1rem;
                    background-color:#ddd;
                    transition: all 1s;
                }
                li:not(:first-child){
                     border-top: solid 1px #999;
                }
                li:hover{
                    background-color:#aaa;
                }
            </style>
        </head>
        <body>
        <div>
            <ul>
                ${lis}
            </ul>
        </div>
        </body>
    </html>`
}