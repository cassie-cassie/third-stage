// 有商品结算购物车界面
const Car=require("../../model/Car")

function showshoppingfullcar(req,res){
    var a =req.cookies._id
    Car.find({'username':a}).then((results)=>{
         console.log(results)
         res.render('shoppingfullcar',{
            cargoods:results
        })
    })

}
module.exports = showshoppingfullcar