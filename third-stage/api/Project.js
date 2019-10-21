const Project = require('../model/Project')

function showProject(req,res){
    // Project.create({type:'123'},(err)=>{
    //     if(!err){
    //         console.log('888')
    //     }else{
    //         console.log(err)
    //     }
    // })
    Project.create({
        type:'女装',
        img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/08/21/32/ias_2664a882-0973-42ce-ad6b-8235d2ce1acd_604x290_100.jpg!75.webp",
        sell:'MAPLE AROMA女装特卖专场'
    },{
        type:'女装',
        img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/06/11/116/ias_b264e46a-f01e-49e3-afa8-bc060e97228f_604x290_100.jpg!75.webp",
        sell:'BUOUBUOU女装品质专场'
    })
}

module.exports = showProject
