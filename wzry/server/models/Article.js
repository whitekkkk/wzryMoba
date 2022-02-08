//文章模型

const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    categories:[ {type: mongoose.Schema.Types.ObjectId, ref:'Category'}],
    title: { type: String },
    body: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', schema)//导出模型
