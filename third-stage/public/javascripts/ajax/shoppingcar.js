 
 // 购物车
 shopcar.onclick=function(){ 
    if(document.cookie!=''){
        location.href='/shopping/fullcar'
        console.log(document.cookie)
    }else{
        location.href='/shopping/nullcar'
    }
    
}