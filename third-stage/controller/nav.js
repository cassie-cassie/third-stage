const project = require("../model/Project")
function showNav(req,res){

    project.find({"type1":"index"}).then((results)=>{
        // console.log(results)
        if(results){
            res.render('index',{
                indeximage:results,
                data:[{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/16/180/ias_157121756031936_1135x545_85.jpg",
                    goodsname:'阿迪达斯潮流运动鞋专场',
                    price1:'1折起',
                    price2:'部分商品折上2.7折起'
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/16/128/ias_157121616982289_1135x545_85.jpg",
                    goodsname:'菲尼迪FINITY女装专场',
                    price1:'1折起',
                    price2:'部分商品折上3.3折起'
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/17/47/ias_157129423459335_1135x545_85.jpg",
                    goodsname:'七格格旗下品牌女装-秋冬新品特卖正在热卖中',
                    price1:'0.8折起',
                    price2:'部分商品折上4.2折起'
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/19/171/ias_157144897619376_1135x545_85.jpg",
                    goodsname:'九牧王JOEONE集团男女装特惠专场',
                    price1:'0.5折起',
                    price2:'爆款休闲裤历史新低价129！'
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/16/89/ias_157122091280212_1135x545_85.jpg",
                    goodsname:'阿芙AFU精油护肤专场',
                    price1:'1折起',
                    price2:''
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/17/11/ias_157130065361835_1135x545_85.jpg",
                    goodsname:'Minibalabala婴幼服饰秋冬爆款专场',
                    price1:'2.3折起',
                    price2:'部分商品折上3.8折起'
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/17/199/ias_157131056585981_1135x545_85.jpg",
                    goodsname:'国际轻奢珠宝美饰     秋冬暖搭特卖专场',
                    price1:'0.8折起',
                    price2:'部分商品折上4.8折起'
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/19/60/ias_157146929546203_1135x545_85.jpg",
                    goodsname:'恒源祥羊毛直降专场',
                    price1:'4.1折封顶',
                    price2:'部分商品折上3.6折起'
                },{
                    img:"https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/10/17/152/ias_157129419711957_1135x545_85.jpg",
                    goodsname:'卡其多Cameido女鞋专场',
                    price1:'2.9折封顶',
                    price2:'全场折上8折'
                }]
            })
        }
    })
}
module.exports = showNav