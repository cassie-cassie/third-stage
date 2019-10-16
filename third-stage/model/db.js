const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aaa')        //创建数据库的名字
const db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'))

db.once('open',function () {
console.log('数据库连接成功')
})
module.exports = db
// 数据库连接的代码一样，固定