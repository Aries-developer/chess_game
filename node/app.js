var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs')

var rechargeRouter = require('./routes/recharge');//充值路由
var usersRouter = require('./routes/users');//会员路由

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//登录拦截
// app.use((req, res, next) => {
//   let url = req.originalUrl
//   if (req.cookies.id) {
//     console.log(1)
//     next()
//   } else {
//     if (url == '/users/login' || url == '/users/register' || url == '/users/logout') {
//       next()
//     } else {
//       res.json({
//         status: '1001',
//         msg: '黑人就不用登录了吗？⊙﹏⊙‖∣°',
//         result: ''
//       })
//     }
//   }
// })

app.use('/', rechargeRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
