const express = require('express');
const Router = express.Router();

首页路由
Router.get('/',require('../controller/nav.js'))

// // 登录路由
// Router.get('/login',require('../controller/login.js'))

// // 登录后路由
// Router.get('/user',require('../controller/user.js'))

// // 最后疯抢
// Router.get('/lastCrazy',require('../controller/lastCrazy'))

// // 美妆
// Router.get('/newbeauty',require('../controller/newbeauty'))

// // 母婴
// Router.get('/baby',require('../controller/baby'))

// // 国际
// Router.get('/international',require('../controller/international'))

// // // 家电
// Router.get('/homeapp',require('../controller/homeapp'))

// // 家居
// Router.get('/furniture',require('../controller/furniture'))

// 生活
Router.get('/life',require('../controller/life'))

// // 唯品奢
// Router.get('/vipcostly',require('../controller/vipcostly'))

module.exports = Router
