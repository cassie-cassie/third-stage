const User = require('../model/User')

function login(req,res){
    // console.log(req.body)
    
    User.findOne({username:req.body.username,password: req.body.password})
        .then((result)=>{
            if(result){
                console.log(result)
                let data = {"username": req.body.username}
                var a = result.id.toString()
                res.cookie('_id',a);
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