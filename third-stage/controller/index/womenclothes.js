
const project = require('../../model/Project')
function showWomenClothes(req,res){
    project.find({"type":"运动户外"}).then((results)=>{
        if(results){
            console.log(results)
            res.render('womenclothes',{
                data:results,
                // list:results
            })
        }
    })
}
module.exports = showWomenClothes