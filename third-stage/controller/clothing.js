
const shop=require('../model/Project')

function showclothing(req,res){
    console.log(req.params.type)
    console.log('==============================================================')
    shop.find({"id":req.params.type}).then((results)=>{
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