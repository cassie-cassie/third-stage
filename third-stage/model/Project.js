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
    largelist:Object,
    largeimage:String,
    sell:String,
    img:String,
    price:String,
    oldprice:String,
    method:String,
    desc:String,
    zhekou:String,
    id:Number,
    zhijiang:String,
    list1:Object,
    list2:Object,
    yanse1:String,
    desc:String
});

// 设置Model
const project = mongoose.model('project', projectSchema)

module.exports = project