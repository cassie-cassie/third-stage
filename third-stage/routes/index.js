var express = require('express');
var router = express.Router();
const User = require('../model/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  User.create({username:'123'}).then((err)=>{
    if(!err){
      console.log('成功')
    }else{
      console.log('失败')
    }
  })
  res.render('index', { 
      title:'1233'
   });
});

module.exports = router;
