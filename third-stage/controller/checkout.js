//订单详情
const Dingdan =require("../model/Dingdan")
function showcheckout(req,res){
    var a =req.cookies._id
    Dingdan.find({'username':a}).then((results)=>{
        console.log(results+"订单渲染")
        res.render('checkout',{
           data:results
       })
   })
}
module.exports=showcheckout