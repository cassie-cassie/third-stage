// 创建Type数据库

const mongoose=require('mongoose')

// 设置 Schema 结构
const CarSchema = new mongoose.Schema({
    type:String,
    imgdesc:String,
    list:Array,
    smallimage:String,
    listdesc:String,
    largelist:Array,
    largeimage:String,
    sell:String,
    img:String
});

// 设置Model
const Car = mongoose.model('Car', CarSchema)

module.exports = Car 