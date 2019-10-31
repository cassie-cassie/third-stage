const User=require('../model/User')


async function showUser(req,res){
    var a =req.cookies._id
    // console.log(a)
    var result = await User.find({'_id':a})
    res.render('user',{
        result:result[0].username
    })
}
module.exports = showUser