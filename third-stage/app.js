// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
// app.get('/add',require('./api/Project'))

// 配置路由


app.use('/checkout',require('./controller/checkout')) //订单详情界面
app.use("/shopping",require("./routes/index"))
app.use('/shop',require('./routes/index'))
app.use('/users', usersRouter);

app.use('/', indexRouter);

// // 配置功能路由  登录
// app.post('/login',require('./api/login'))


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