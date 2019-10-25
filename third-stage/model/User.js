// 创建User数据库

const mongoose=require('mongoose')    //引入mongoose

// 设置 Schema 结构
const mongooseSchema = new mongoose.Schema({
    username : String,
    password : String
});

// model
const userModel = mongoose.model('user', mongooseSchema)       //    User为要在数据库创建数据的名称mongoose上面引入mongoose时定义的名字    mongooseSchema为设置结构时定义的名字

// 暴露
module.exports = userModel