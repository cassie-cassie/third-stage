const Car = require('../model/Car')

function showdel(req,res){
      var str = req.cookies._id
      var id=req.body.idchuan
      Car.remove({"p_id":id,"username":str}).then((results)=>{
            if(!results){
                res.send("删除成功")
            }else{
                console.log(err)
            }
      })
      res.end()
}
module.exports = showdel
