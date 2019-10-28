// 创建Type数据库

const mongoose=require('mongoose')

// 设置 Schema 结构
const shopSchema = new mongoose.Schema({
    img:String,
    fengding:String,
    list:Object,
    img1:String,
    dazhe:String,
    money:String,
    yuanjia:String,
    shop:String,
    daojishi:String,
    yugao:Object,
    data:Object
});

// 设置Model
const shop = mongoose.model('shop', shopSchema)

module.exports = shop 