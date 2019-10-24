const express = require('express');
const Router = express.Router();
// 首页路由
Router.get('/index',require('../controller/nav.js'))

// 首页女装详情
// Router.get('/index/womenclothes',require('../controller/index/womenclothes'))

// 搜索路由
Router.get('/search',require('../controller/search'))

// 动态路由   首页的10个分类  女装 男装等
Router.get('/index/:type',require('../controller/index/womenclothes'))

// 动态路由    10个分类里面的12个小分类
Router.get('/clothing/:type',require('../controller/clothing'))
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
Router.get('/classify',require('../controller/classify.js'))

// 列表页路由
Router.get('/clothing',require('../controller/clothing'))

// //购物车路由
Router.get('/fullcar',require('../controller/car/fullcar'))  //结算购物车
Router.get('/nullcar',require('../controller/car/nullcar'))  //结算购物车

module.exports = Router
