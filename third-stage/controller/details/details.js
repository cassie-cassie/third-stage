// const detailsa = require('../../model/details')

const project = require('../../model/Project')
function showdetails(req,res){
    project.find({"id":req.params.type}).then((results)=>{
        console.log(results)
        console.log('-----------')
        if(results){
            res.render('details',{
                data:results,
            })
        }
    })
}
module.exports = showdetails