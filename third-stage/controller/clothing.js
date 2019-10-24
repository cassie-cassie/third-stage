
const shop=require('../model/Project')

function showclothing(req,res){
    console.log(req.params.id)
    console.log('==============================================================')
    shop.find({"id":1}).then((results)=>{
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