
const project = require('../../model/Project')
function showWomenClothes(req,res){
    // console.log(req.params.id)
    // project.find({"type":req.params.id},(err,results)=>{
    //     console.log(results)
    //     console.log('==================')
    //     if(!err){
    //         res.render('womenclothes',{
    //             data:results
    //         })
    //     }
    // })
    project.find({"type":req.params.type}).then((results)=>{
        if(results){
            console.log('---------------------------')
            res.render('womenclothes',{
                data:results,
                // list:results
            })
        }
    })
}
module.exports = showWomenClothes