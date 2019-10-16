$('form').on('submit',(e)=>{
    e.preventDefault()      //阻止浏览器默认行为
    $.ajax({
        type:'post',
        url:'/user/login',
        data:$('form').serialize(),
        success:function(data){
            //提示层
            layer.msg(data.msg);
            if(data.code){
                setTimeout(()=>{
                    location.href='/admin/index'
                },2000)
            }
            
        },
        error:function(err){
            console.log(err)
        }
    })
})