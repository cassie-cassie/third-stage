const Project = require('../model/Project')

function showProject(req,res){
    Project.create({
        id:1,
        list:[{
            img:"/images/clothing/2.jpg",
            method:"疯抢价",
            price: "￥169",
            oldprice:"1099",
            desc:"2019秋冬女新款系带收腰中长款针织打底毛衣过膝连衣裙"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00107314/10004400/2044501679-157702776448294912-157702776448299047-1_360x456_100.jpg",
            price : "￥269",
            oldprice : "999",
            zhekou : "1.7折",
            desc : "【商场同款】GMXY2018冬女装新品X型翻领连衣裙G587217"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00107314/10004400/1995351244-964410061175570432-964410061175570440-1_360x456_100.jpg",
            zhijiang: "直降20%",
            price: "￥239",
            oldprice: "1399",
            desc: "新款 字母印花连帽加绒保暖中长裙 女款连衣裙"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/05/28/111/f90ba552-0322-4351-aba5-e9a8e342d17e_360x456_100.jpg",
            method: "疯抢价",
            price: "￥209",
            oldprice: "1039",
            desc: "GMXY2019夏季新款连衣裙碎花中袖宽松衬衫裙文艺休闲"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/604017/2019/0917/16/e721c0c2-b5db-4aa7-9e2f-d944457613e6_360x456_100.jpg",
            price: "￥200",
            oldprice: "1309",
            zhekou: "1.5折",
            desc: " 【商场同款】GMXY2018冬女装新品格子棒球领连衣裙G187309"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/09/06/28/6e771027-a9a6-4987-a03f-b1f90936bb9a_360x456_100.jpg",
            price: "￥850",
            oldprice: "1009",
            zhekou: "1.5折",
            desc: "女装羊毛阿尔巴卡混纺喇叭袖连衣裙"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/24/84/7f4bc452-bd7c-4b8c-ac48-1b3f6da5dcd2_360x456_100.jpg",
            price: "￥230",
            oldprice: "1059",
            zhekou: "1.5折",
            desc: " 女优雅直身毛织连衣裙"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/17/182/e0eb7f53-b890-4a32-8c59-e69017884e22_360x456_100.jpg",
            price: "￥140",
            oldprice: "1379",
            zhekou: "1.5折",
            desc: "100%山羊绒 女式V领羊绒连衣裙"
        },{
            img: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/08/25/141/068d89ca-bf62-4a74-954b-d6edaa88b1c1_360x456_100.jpg",
            price: "￥230",
            oldprice: "439",
            zhekou: "1.5折",
            desc: "中长款卫衣裙森马秋季新款运动风抽绳连帽刺绣连衣裙女"
        },{
            img: "/images/clothing/1.jpg",
            price: "￥279",
            method: "疯抢价",
            oldprice: "399",
            "desc" : "百图betu女装修身显瘦纯色高领打底毛衫裙腰带款针织连衣裙"
        }]
    })
}

module.exports = showProject
