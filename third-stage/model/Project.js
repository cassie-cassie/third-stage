// 创建Type数据库

const mongoose=require('mongoose')

// 设置 Schema 结构
const mongooseSchema = new mongoose.Schema({
    type:String
});

// 设置Model
const project = mongoose.model('Project', mongooseSchema)

module.exports = project