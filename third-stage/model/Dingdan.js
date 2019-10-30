// 创建Type数据库

const mongoose=require('mongoose')

// 设置 Schema 结构
const DingdanSchema = new mongoose.Schema({
    goodsimg:String,// 商品图片
    goodsname:String, // 商品名字
    goodssize:String, // 商品尺码
    goodsprice:Number,// 商品价格
    username:String,//用户名字
    totalprice:Number ,//总价
    goodsnum:Number  //商品数量
});

// 设置Model
const Dingdan = mongoose.model('Dingdan', DingdanSchema )
module.exports = Dingdan