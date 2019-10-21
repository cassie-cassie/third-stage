function showVipcostly(req,res){
    res.render('vipcostly',{
        img:"/images/vipcostly/ming.jpg",
        goodsname:'moiselle女装-名媛挚爱',
        price1:'5折封顶',
        price2:'剩两天'
    },{
        img:"/images/vipcostly/jingdian.jpg",
        goodsname:'Dr.Martens马丁靴-秋冬限时降价专场',
        price1:'3.3折起',
        price2:'剩两天'
    },{
        img:"/images/vipcostly/haohuo.jpg",
        goodsname:'国际大牌服饰直击底价清仓专场',
        price1:'1折起',
        price2:'剩两天'
    },{
        img:"/images/vipcostly/fashi.jpg",
        goodsname:'法国Guerlain护肤彩妆海淘专场',
        price1:'3.1折起',
        price2:'剩两天' 
    },{
        img:"/images/vipcostly/meishi.jpg",
        goodsname:'MICHAEL KORS服饰箱包折扣专场',
        price1:'3.1折起',
        price2:'剩两天'  
    },{
        img:"/images/vipcostly/yishi.jpg",
        goodsname:'ARMANI JEANS男女装精选专场',
        price1:'5折封顶',
        price2:'剩两天'  
    },{
        img:"/images/vipcostly/ying.jpg",
        goodsname:'专属衣橱 MANGO女装品质专场',
        price1:'3.1折起',
        price2:'剩两天'
    },{  
        img:"/images/vipcostly/yuzhong.jpg",
        goodsname:'GUCCI精选专场',
        price1:'3.2折起',
        price2:'剩两天'
    },{
        img:"/images/vipcostly/yishe.jpg",
        goodsname:'意式',
        price1:'3.2折起',
        price2:'剩两天'
    })
}
module.exports = showVipcostly