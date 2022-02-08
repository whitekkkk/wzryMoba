const express = require("express")

const app = express()

app.set('secret', 'asdwhok331') //设置一个变量secret

app.use(require('cors')())//允许跨域
app.use(express.json())//解析客户端传入进来的信息

app.use('/admin',express.static(__dirname + '/admin'))
app.use('/',express.static(__dirname + '/web'))
app.use('/uploads',express.static(__dirname + '/uploads'))//将存放图片的文件夹静态文件托管

require('./plugins/db')(app)
require('./routes/admin')(app) //通过require获取暴露出的函数并且向里面传递参数app
require('./routes/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000');
})