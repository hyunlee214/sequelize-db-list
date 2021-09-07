'use strict';

const createError   = require('http-errors');
const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const models        = require('./models/index.js');
const sequelize     = require('./models').sequelize;
const nunjucks      = require("nunjucks");

const indexRouter   = require('./routes/index');
// const usersRouter   = require('./routes/users');
const memberRouter  = require('./routes/index');

const app = express();
sequelize.sync();

// 정적 파일 제공
app.use(express.static('public'));

models.sequelize.sync().then( ()=> {
  console.log('db연결성공');
}). catch(err => {
  console.log('db연결실패');
  console.log(err);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/member', memberRouter);

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
