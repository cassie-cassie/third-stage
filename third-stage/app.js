// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// const db = require('./model/db')



// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;





const express=require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const db=require('./model/db')
// const User=require('./model/User')
const app = express()


app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())
app.use(cookieParser())



app.listen(3000,()=>{
    console.log('server is running in 3000')
})



// // 配置模板引擎
// app.set('view engine','ejs')
// // 配置静态资源
// app.use(express.static('public'))
// // 配置路由
// app.use('/admin',require('./routes/admin'))

// // 配置功能路由
// app.post('/user/login',require('./api/login'))    //管理员登录

// // app.post('/type_add',require('./api/type_add'))    //添加分类的路径
// app.post('/type_add',require('./api/type_add'))    //添加分类的路由


// // ！！！！！！！！！！！！！！分类列表不需要功能路由，直接从创好的type表中拿数据即可！！！！！！！！！！！！！！！！！！！！！！！！！
// // app.post('/type_list',require('./api/type_list'))      //分类列表的路由
// // app.post('/type_list',require('./api/type_list'))    //添加分类的路由



// // 配置用户登录路由
// app.use('/userRegister',require('./controller/userRegister'))