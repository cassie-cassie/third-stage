const User = require('../model/User')

function login(req,res){
    // console.log(req.body)
    
    User.findOne({username:req.body.username,password: req.body.password})
        .then((result)=>{
            if(result){
                let data = {"username": req.body.username}
                res.cookie('blog-admin-cookie',JSON.stringify(data));
                res.json({
                    code:1,
                    msg: '登录成功'
                })
            }else{
                res.json({
                    code:0,
                    msg: '登录失败'
                })
            }
        })
}
module.exports = login