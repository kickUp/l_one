var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 


// -------------- ROUTES ------------------
// -------------- page ------------------
var index = require('./routes/index'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// -------------- ROUTES ------------------
app.use('/', index); 
 
//---Resources  
app.use('/static/js', express.static(__dirname + "/build/public/javascripts"));
app.use('/static/images', express.static(__dirname + "/build/public/images"));
app.use('/static/css', express.static(__dirname + '/build/public/stylesheets'));

app.use('/static/elements', express.static(__dirname + '/views/elements'));
app.use('/static/polymer', express.static(__dirname + '/views/polymer'));
// При сборке grunt почему-то не "подтягивается" animation.js.
app.use('/static/bower_components', express.static(__dirname + '/bower_components/')); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('errors/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('errors/error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;