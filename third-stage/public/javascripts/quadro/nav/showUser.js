// console.log(document.cookie)

// 欲解析
$(function(){
    get()
})
function get(){
    var str = document.cookie
    // 通过;分隔成数组
    var arr = str.split(';')
    var boo = false
    for( var i=0;i<arr.length;i++){
        // trim()删除空格
        arr[i] = arr[i].trim().split('=')
        if(arr[i][0] === 'blog-admin-cookie'){
            // unescape()字符串解码
            var user = JSON.parse(unescape(arr[i][1]))
            $('#user').text(user.username)
            boo = true
        }
    }
    // 判断用户名是否有，如果没有，回到登录界面重新登录
    if(!boo){
        location.href='/admin/login'
    }
    console.log(arr)
}
