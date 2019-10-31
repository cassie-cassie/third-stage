const Car = require('../model/Car')
const Project = require('../model/Project')


function showCar(req,res){
      var str = req.cookies
      Project.find({'id':req.body.id}).then(async (results)=>{
            console.log(req.body.sizechuan)
            console.log(req.body.id)
            var data = {
                  // 'goddsshop':results[0].shopname
                  'goodsimg':results[0].list[0].img,
                  'goodsname':results[0].desc,
                  'goodsprice':results[0].price,
                  'goodssize':req.body.sizechuan,
                  "username":str._id,
                  "p_id":req.body.id
            }
            Car.create(data).then((alldata)=>{
                  if(alldata){
                       console.log("详情页商品已经加入购物车")
                  }else{
                       console.log(err)
                  }
           })

      })
      res.end()
}
module.exports = showCar
