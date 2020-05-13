## koa笔记

### async/await用法

1. async对象执行完返回一个promise对象
2. await 后面可以追加 promise 对象，获取resolve的值

async 函数返回的是promise对象，下图test函数中调用的readAData()执行后返回一个promise对象，所以必须使用await获取promise对象中resolve的值。

```js
async function readAData () {
    const aData = await getFileContent('a.json')
    return aData
}
async function test () {
    const aData = await readAData ()
    console.log(aData)
}
test()
```

3. await必须包裹在async对象里面
4. 可以通过try-catch截获promise中 reject 的值

```js
async function readFileData () {
    try {
        const aData = await getFileContent ('a.json')
        console.log('a data', aData)
        const bData = await getFileContent (aData.next) 
        console.log('b data', bData)
        const cData = await getFileContent (bData.next)
        console.log('c data', cData)
    } catch (err) {
        console.error(err)
    }
}
readFileData ()
```

上面例子中的getFileContent实现如下

```js
const fs = require('fs')
const path = require('path')
function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) => {
        const jsonFileName = path.resolve(__dirname, 'data', fileName)
        fs.readFile(jsonFileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}
```

### 搭建环境

1.安装脚手架

```
cnpm install koa-generator -g
```

2.搭建项目环境

```
koa2 koaService
```

3.cross-env

```
cnpm i cross-env -D
```

启动加上环境变量

```
"scripts": {
    "start": "node bin/www",
    "dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon bin/www",
    "prd": "cross-env NODE_ENV=production pm2 start bin/www",
  },
```

 4.启动端口参见 `bin\www`

```
var port = normalizePort(process.env.PORT || '3000')
```

### 目录结构

- bin\www 启动文件


- routes 路由
- views 前端模板
- app.js 初始化文件

其中，这一块代码表示请求耗时

```js
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
```

