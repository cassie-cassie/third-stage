const Car = require('../model/Car')
const Project = require('../model/Project')
const User=require('../model/User')

function showCar(req,res){
      console.log('1')
//      console.log(req.body.sizechuan)
//      console.log(req.body.id,'----------------------------------req.body.id')
      // User.find({'username':})
      // var a = await Project.find('id':req.body.id)
      Project.find({'id':req.body.id}).then(async (results)=>{
            console.log(req.body.sizechuan)
            var data = {
                  // 'goddsshop':results[0].shopname
                  'goodsimg':results[0].img,
                  'goodsname':results[0].desc,
                  'goodsprice':results[0].price,
                  'goodssize':req.body.sizechuan
            }
            Car.create(data).then((alldata)=>{
                  if(alldata){
                        res.send('添加成功')
                  }else{
                       console.log(err)
                  }
           })

      })
      
}
module.exports = showCar
