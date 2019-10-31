const Car = require('../model/Car')
const  Dingdan = require('../model/Dingdan')

function showdingdan(req,res){
    var a =req.cookies._id  //  用户名 
    var b=req.body.arrid  // 商品id 
    var c=req.body.totalprice  // 总价格
    var d=req.body.arrnum   // 商品件数
    Car.find({"p_id":b,"username":a}).then((results)=>{
            console.log(req.body.sizechuan)
            console.log(req.body.id)
            var data = {
                'goodsimg':results[0].goodsimg,
                'goodsname':results[0].goodsname,
                'goodsprice':results[0].goodsprice,
                'goodssize':results[0].goodssize,
                "username":results[0].username,
                "totalprice":c,
                'goodsnum':d,
            }
            Dingdan.create(data).then((alldata)=>{
                  if(alldata){
                    cconsole.log('订单提交界面')
                  }else{
                       console.log(err)
                  }
           })

      })
      res.end()
}
module.exports = showdingdan
