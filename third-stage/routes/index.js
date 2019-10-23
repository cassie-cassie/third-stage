const express = require('express');
const Router = express.Router();

// 首页路由
Router.get('/index',require('../controller/nav.js'))

// 首页女装详情
Router.get('/index/womenclothes',require('../controller/index/womenclothes'))

// // 动态路由
// Router.get('/index/:type',function showclothes(req,res){
    
// })



































// 登录路由
Router.get('/login',require('../controller/login.js'))
Router.get('/login_user',require('../controller/login_user'))

// 登录后路由
Router.get('/user',require('../controller/user.js'))

// // 最后疯抢
Router.get('/lastcrazy',require('../controller/lastcrazy'))

// 美妆
Router.get('/newbeauty',require('../controller/newbeauty'))

// 母婴
Router.get('/baby',require('../controller/baby'))

// 国际
Router.get('/international',require('../controller/international'))

// // 家电
Router.get('/homeapp',require('../controller/homeapp'))

// 家居
Router.get('/furniture',require('../controller/furniture'))

// 生活
Router.get('/life',require('../controller/life'))

// // 唯品奢
Router.get('/vipcostly',require('../controller/vipcostly'))

// 分类
Router.get('/index/classify',require('../controller/classify'))

module.exports = Router
