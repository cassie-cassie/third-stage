function showclassify(req,res){
    console.log('123')
    res.render('classify',{
        // 品牌循环
    data:[{
        leixing:'女装',
            list:[{
                src:'/images/classify/p(1).jpg',
            },{
                src:'/images/classify/p(2).jpg',
            },{
                src:'/images/classify/p(3).jpg',
            },{
                src:'/images/classify/p(4).jpg',
            },{
                src:'/images/classify/p(5).jpg',
            },{
                src:'/images/classify/p(6).jpg',
            }]
    },{
        leixing:'母婴',
            list:[{
                src:'/images/classify/p(7).jpg',
            },{
                src:'/images/classify/p(8).jpg',
            },{
                src:'/images/classify/p(9).jpg',
            },{
                src:'/images/classify/p(10).jpg',
            },{
                src:'/images/classify/p(11).jpg',
            },{
                src:'/images/classify/p(12).jpg',
            }]
    },{
        leixing:'美妆',
            list:[{
                src:'/images/classify/p(13).jpg',
            },{
                src:'/images/classify/p(14).jpg',
            },{
                src:'/images/classify/p(15).jpg',
            },{
                src:'/images/classify/p(16).jpg',
            },{
                src:'/images/classify/p(17).jpg',
            },{
                src:'/images/classify/p(18).jpg',
            }]
    },{
        leixing:'鞋靴',
            list:[{
                src:'/images/classify/p(19).jpg',
            },{
                src:'/images/classify/p(20).jpg',
            },{
                src:'/images/classify/p(21).jpg',
            },{
                src:'/images/classify/p(22).jpg',
            },{
                src:'/images/classify/p(23).jpg',
            },{
                src:'/images/classify/p(24).jpg',
            }]
    },{
        leixing:'母婴',
            list:[{
                src:'/images/classify/p(25).jpg',
            },{
                src:'/images/classify/p(26).jpg',
            },{
                src:'/images/classify/p(27).jpg',
            },{
                src:'/images/classify/p(28).jpg',
            },{
                src:'/images/classify/p(29).jpg',
            },{
                src:'/images/classify/p(30).jpg',
            }]
    },{
        leixing:'男装',
            list:[{
                src:'/images/classify/p(31).jpg',
            },{
                src:'/images/classify/p(32).jpg',
            },{
                src:'/images/classify/p(33).jpg',
            },{
                src:'/images/classify/p(34).jpg',
            },{
                src:'/images/classify/p(35).jpg',
            },{
                src:'/images/classify/p(36).jpg',
            }]
    }],

        // 分类界面
    fenlei:[{
        h2:"精品推荐",
        xqimg:[{
            img:"/images/classify/p(2).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(3).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(4).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(5).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(6).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(7).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(8).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(4).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(4).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(9).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(4).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(10).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(11).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(12).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(13).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(4).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(17).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(18).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(19).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(20).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"女装",
        xqimg:[{
            img:"/images/classify/p(21).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(22).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(23).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"男装",
        xqimg:[{
            img:"/images/classify/p(24).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(25).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(26).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"箱包皮具",
        xqimg:[{
            img:"/images/classify/p(27).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(28).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(29).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"手表配饰",
        xqimg:[{
            img:"/images/classify/p(30).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(31).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(32).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"护肤彩妆",
        xqimg:[{
            img:"/images/classify/p(33).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(34).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(35).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"个人护理",
        xqimg:[{
            img:"/images/classify/p(36).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(37).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(38).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"品质精选",
        xqimg:[{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"品质精选",
        xqimg:[{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"品质精选",
        xqimg:[{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"品质精选",
        xqimg:[{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"品质精选",
        xqimg:[{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"品质精选",
        xqimg:[{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        }]
    },{
        h2:"品质精选",
        xqimg:[{
            img:"/images/classify/p(14).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(15).jpg",
            title:"连衣裙"
        },{
            img:"/images/classify/p(16).jpg",
            title:"连衣裙"
        }]
    }]
    })
}
module.exports = showclassify  