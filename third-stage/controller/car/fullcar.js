// 有商品结算购物车界面
// const Car=require("")
function showshoppingfullcar(req,res){
    res.render('shoppingfullcar',{
        cargoods:[{
            goodshop:'xixi店铺',
            goodsname:'xixixixiixixix',
            goodsimg:'//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/09/06/25/9662387a-e4ac-4cac-a817-fed3668c3b52_5t.jpg',
            goodsdesc:'1234163746764',
            goodsprice:"113"
        },{
            goodshop:'hahh店铺',
            goodsname:'xixixixiixixix',
            goodsimg:'//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/10/11/139/66e9e127-ee07-43d7-9770-828aed49deaa_420_531.jpg',
            goodsdesc:'xl13463',
            goodsprice:"10"
        }]
    })
}
module.exports = showshoppingfullcar