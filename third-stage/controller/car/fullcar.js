// 有商品结算购物车界面
const Car=require("../../model/Car")
function showshoppingfullcar(req,res){
    Car.find().then((results)=>{
       
        if(results){
            console.log('-------------aaaa--------------')
            res.render('shoppingfullcar',{
                cargoods:results,
            })
        }
    })
}
module.exports = showshoppingfullcar