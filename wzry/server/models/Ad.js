//广告位模型

const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    name: { type: String },
    items:[{
        image:{ type: String },
        url:{ type: String }
    }]

})

module.exports = mongoose.model('Ad', schema)//导出模型
