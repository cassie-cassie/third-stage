// 创建Type数据库

const mongoose=require('mongoose')

// 设置 Schema 结构
const CarSchema = new mongoose.Schema({
    goodshop:String,//店铺名字
    goodsimg:String,// 商品图片
    goodsname:String, // 商品名字
    goodsdesc:String, // 商品尺码
    goodsprice:String,// 商品价格
    goodssize:String,//商品尺寸
    username:String,//用户名字
    p_id:String//商品原本的id  100 102 ...
});

// 设置Model
const Car = mongoose.model('Car', CarSchema)
module.exports = Car 
