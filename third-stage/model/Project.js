// 创建Type数据库

const mongoose=require('mongoose')

// 设置 Schema 结构
const projectSchema = new mongoose.Schema({
    type:String,
    type1:String,
    imgdesc:String,
    list:Object,
    smallimage:String,
    listdesc:String,
    largelist:Array,
    largeimage:String,
    sell:String,
    img:String
});

// 设置Model
const project = mongoose.model('project', projectSchema)

module.exports = project