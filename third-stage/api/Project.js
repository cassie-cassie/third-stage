const Project = require('../model/Project')
// 商品详情id为100开始-----119
// 商品分类详情为id从1开始-----15
// 首页列表详情id为type
function showProject(req,res){
    Project.create({
        id:100,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙",
            color1:'杏色',
            color2:'白色',
            size1:'S',
            size2:'M',
            size3:'L',
            size4:'XL'
        }]
    },{
        id:101,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/07/26/42/73cb1cb5-0e48-475f-89cf-c21011d97696_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥104",
            oldprice:"359",
            zhekou:'2.9折',
            desc:"春款薄款风衣女中长款字母印花韩版宽松连帽拉链外套",
            id:110
        }]
    },{
        id:102,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:103,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:104,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:105,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:106,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:107,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:108,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:109,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:110,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:111,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price:"￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        }]
    },{
        id:112,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/09/26/167/1b7091f3-8650-450a-94bc-e9ae4afcd6b8_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥188",
            oldprice:"1099",
            desc:"斯凯奇男款休闲运动外套"
        }]
    },{
        id:113,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/08/20/12/3d9dcf8e-9722-45d5-918f-d922b626e481_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥219",
            oldprice:"369",
            desc:"彪马卫衣男2019秋季李现同款运动服圆领设计"
        }]
    },{
        id:114,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/615683/2019/0917/6/bc8f1974-ac2b-4d35-acc0-a58a4f30abee_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥59",
            oldprice:"498",
            desc:"【售完即止】秋冬男款运动裤男士休闲裤商务韩版潮流修长"
        }]
    },{
        id:115,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/09/26/167/1b7091f3-8650-450a-94bc-e9ae4afcd6b8_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥188",
            oldprice:"1099",
            desc:"斯凯奇男款休闲运动外套"
        }]
    },{
        id:116,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/08/20/12/3d9dcf8e-9722-45d5-918f-d922b626e481_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥219",
            oldprice:"369",
            desc:"彪马卫衣男2019秋季李现同款运动服圆领设计"
        }]
    },{
        id:117,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/615683/2019/0917/6/bc8f1974-ac2b-4d35-acc0-a58a4f30abee_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥59",
            oldprice:"498",
            desc:"【售完即止】秋冬男款运动裤男士休闲裤商务韩版潮流修长"
        }]
    },{
        id:118,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/08/20/12/3d9dcf8e-9722-45d5-918f-d922b626e481_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥219",
            oldprice:"369",
            desc:"彪马卫衣男2019秋季李现同款运动服圆领设计"
        }]
    },{
        id:119,
        list:[{
            img:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/615683/2019/0917/6/bc8f1974-ac2b-4d35-acc0-a58a4f30abee_360x456_100.jpg!75.webp",
            method:"疯抢价",
            price:"￥59",
            oldprice:"498",
            desc:"【售完即止】秋冬男款运动裤男士休闲裤商务韩版潮流修长"
        }]
    })
    res.end('123')
}

module.exports = showProject


// model文件夹中可以这样定义数据类型
        // list:[{
        //     img:'string',
        //     method:'string'
        // }]