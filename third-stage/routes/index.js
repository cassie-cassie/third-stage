const express = require('express');
const Router = express.Router();

// 首页路由
Router.get('/',require('../controller/nav.js'))

module.exports = Router
