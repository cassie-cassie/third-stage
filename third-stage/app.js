// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const submit = require('./controller/submit')
const db = require('./model/db')



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// 配置启动数据库添加内容的路由
app.get('/add',require('./api/Project'))

// 配置路由

app.use('/finish',require('./controller/finish')) // 订单完成
app.use('/checkout',require('./controller/checkout')) //订单详情界面
app.use("/shopping",require("./routes/index"))
app.use('/shop',require('./routes/index'))
app.use('/users', usersRouter);

app.use('/', indexRouter);

// // 配置功能路由  登录
// app.post('/login',require('./api/login'))

// 处理数据
app.post('/submit',require('./controller/submit'))

// 配置功能路由
app.post('/login',require('./api/login'))  
app.post('/detail',require('./api/Car')) //详情界面提交内容到购物车
app.post('/del',require('./api/del'))  // 删除购物车内容
app.post('/dingdan',require("./api/dingdan")) //订单界面


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;