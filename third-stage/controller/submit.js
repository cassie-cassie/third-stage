const User = require('../model/User')
function submit(req,res){
    // 处理数据
    // res.send(req.body)
    // const data = req.body
    let data = ''
    req.on('data',function(chunk){
        data+=chunk
    })
    req.on('end',function(){
        data = JSON.parse(data.toString())
        User.findOne({username: data.username}).then((result)=>{
            if(result){
                res.json({
                    title: '该用户名已经被注册',
                    code: false
                })
            }else{
                User.create(data,function(error,result){
                    if(result){
                        res.json({
                            title: '注册成功',
                            code: true
                        })
                    }else{
                        res.end('新增失败')
                    }
                })
            }   
        })
    })
}
module.exports = submit
