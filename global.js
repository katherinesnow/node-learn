var path = require('path')

console.log('============__dirname 全局变量用法======')
// __dirname 当前模块的文件夹名称（解析后的据对路径）。等同于 __filename 的 path.dirname() 的值
console.log(__dirname)
console.log(path.dirname(__filename))
console.log(__dirname == path.dirname(__filename))


console.log('============__filename 全局变量用法======')
// __filename
// 当面模块的文件名称--解析后的绝对路径
console.log(__filename)
console.log(__dirname)


// setImmediate() 预定立即执行的 callback,它是在 I/O 事件的回调之后被触发。 返回一个用于 clearImmediate() 的 Immediate。
// 当多次调用 setImmediate() 时，callback 函数会按照它们被创建的顺序依次执行
const util = require('util')
const setImmediateromise = util.promisify(setImmediate)

setImmediateromise('foobar').then((value) => {
    // value === 'foobar' (passing values is optional)
    // This is executed after all I/O callbacks.
    console.log('then callback')
})

// or with async function
async function timerExample() {
    console.log('Before I/O callbacks')
    await setImmediateromise()
    console.log('after I/0 callbacks')
}

timerExample()


// process 对象是一个全局变量，它提供当前Nodejs进程的有关信息，以及控制当前Nodejs进程
// 因为是全局变量，所有无需使用require()
console.log('======process.argv=====')
