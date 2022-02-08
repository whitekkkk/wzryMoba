module.exports = app =>{ // 连接数据库
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-wzry', {
        useNewUrlParser: true
    })

    require('require-all')(__dirname + '/../models') //引用所有models
}