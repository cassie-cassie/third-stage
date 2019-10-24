
const shop=require('../model/shop')

function showclothing(req,res){
    shop.find().then((results)=>{
        console.log(results)
        if(results){
            // console.log('-----------')
            res.render('clothing',{
                data:results,
            })
        }
    })
}
module.exports = showclothing