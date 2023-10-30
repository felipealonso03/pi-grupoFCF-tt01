var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session');
const db = require('./database/models');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var posteosRouter = require("./routes/posteos");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"MyApp",resave:false,saveUninitialized:true}));

app.use(function (req,res,next){
  if (req.session.user != undefined){
    res.locals.user=req.session.user;
    return next();
  }
  return next();
})
/*COOKIE*/
app.use(function (req,res,next){
 /**Si existe la cokkie del usuario y no existe el usuario en session*/
 if (req.cookies.userId != undefined && req.session.user== undefined){
   let idUsuarioCokkie=req.cookies.userId;
   db.User.findByPk(idUsuarioCokkie)
   .then((user)=>{
     /*Carga el usuario encontrado en session */
     req.session.user=user.dataValues;
     /*Cargar el usuario en locals */
     res.locals.user=user.dataValues;
     return next();
    })
    .catch((err)=>console.log(err))
  }else{
   return next()
  }
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/posteos", posteosRouter);

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
