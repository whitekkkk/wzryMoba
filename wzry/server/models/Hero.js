//英雄模型

const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    banner: { type: String },
    title: { type: String },
    categories:[ {type: mongoose.Schema.Types.ObjectId, ref:'Category'}],
    scores: {
        difficult: { type: Number},
        skills: { type: Number},
        attack: { type: Number},
        survive: { type: Number},

    },
    skills:[{
        icon:{type: String },
        name:{type: String },
        delay:{type: String },
        cost:{type: String },
        description:{type: String },
        tips:{type: String },
    }],
    items1:[{type: mongoose.Schema.Types.ObjectId, ref:'Item'}],//顺风出装推荐，与物品数据库关联
    items2:[{type: mongoose.Schema.Types.ObjectId, ref:'Item'}],//逆风出装推荐，与物品数据库关联
    usageTips:{type: String},
    battleTips:{type: String},
    teamTips:{type: String},
    partners:[{
        hero:{type: mongoose.Schema.Types.ObjectId, ref:'Hero'},
        description:{type: String }
    }]
})

module.exports = mongoose.model('Hero', schema, 'heroes')//导出模型
