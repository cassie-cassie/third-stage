//查询尺码


$('#addcar').on('submit',(e)=>{
    e.preventDefault()
    $.ajax({
        url: '/detail',
        type: 'post',
        data:  {
            sizechuan:sizechuan,
            id:jiaru.id
        },
        success: function(data){
            console.log(1)
        },
        error: function(err){
            console.log(err)
        }
    })
})