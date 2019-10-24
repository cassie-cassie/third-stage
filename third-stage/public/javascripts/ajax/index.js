const Projects = require('../../../api/Project')
$('form').on('submit',(e)=>{
    e.preventDefault()         
    $.ajax({
        type:'get',
        url:'/index/:type',
        data:$('form').serialize(),
        success:function(){
            if(data){
                setTimeout(()=>{
                    location.href=`/index/${req.parmas.type}`
                })
            }
        },
        err:function(err){
            console.log('11111111111111111111')
        }
       
    })
})