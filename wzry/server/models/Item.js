//物品模型

const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String }
})

module.exports = mongoose.model('Item', schema)//导出模型
