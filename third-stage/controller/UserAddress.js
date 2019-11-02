function showUseradd(req,res){
    res.render('UserAddress',{
        inform:[{
            name:"张三",
            num:"13546210810",
            address:"山西省晋中市榆次区 米加U聚鑫商务",
            time:"周六/日收货",
            delete:"删除",
            xiugai:"修改"
        },{
            name:"李四",
            num:"13254678954",
            address:"山西省晋中市榆次区 米加U聚鑫商务",
            time:"收货时间不限",
            delete:"删除",
            xiugai:"修改"
        },{
            name:"李四",
            num:"13254678954",
            address:"山西省晋中市榆次区 米加U聚鑫商务",
            time:"收货时间不限",
            delete:"删除",
            xiugai:"修改"
        }]
    })
}
module.exports = showUseradd