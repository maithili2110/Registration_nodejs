var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var errorhandler = require('errorhandler');
var  cors = require('cors');
var http = require('http');
var mysql = require('mysql');
// Retrieve
//var MongoClient = require('mongodb').MongoClient;


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(errorhandler())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
app.post('/formdata', function (req, res) {
    console.log(req.body);
    //Connect to the db
    MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
        if (err) {
            return console.dir(err);
        }

        var collection = db.collection('CMPE280_Assignment_3');
        collection.insertOne(req.body);
    });

    res.send('Successfully saved form fields by AJAX ');

}); */

app.post('/reg',function(req,res){

console.log("Inside post app.js");
  //var userData = req.body;
  // var data = {
  //   userid: userData.userid,
  //   password : userData.pwd,
  //   email: userData.email,
  //   secQues1 : userData.securityQues1,
  //   secAns1:userData.secQuesAns1,
  //   secQues2: userData.securityQues2,
  //   secAns2: userData.secQuesAns2,
  //   phone: userData.phone,
  //   address: userData.address,
  //   areasInt: userData.areaInt
  // };

  var userid = req.body.userid;
  var  password = req.body.password;
  var email = req.body.email;
  var secQues1 = req.body.secQues1;
  var secAns1 = req.body.secAns1;
  var secQues2 = req.body.secQues2;
  var secAns2 = req.body.secAns2;
  var phone = req.body.phone;
  var address = req.body.address;
 var areaInt = req.body.areaInt;

  //var userid = req.body.userid;

  console.log(userid);
  console.log(password,email,secQues1,areaInt);
  var con = mysql.createConnection({
    host: "127.0.0.1",
    port : '3306',
    user: "root",
    password: "maithili@123",
    database: "cmpe280_assign"
  });

  con.connect( function(err){
    if (err){
      throw err;
    }
    else {
      console.log('Connected');
    }
  });

  con.query('INSERT INTO registration_ajax ' +
      '(userid ,password,email,secQues1,secAns1,secQues2,secAns2,phone,address,areasInt) VALUES ' +
      '("'+userid+'","'+password+'","'+email+'","'+secQues1 +'","'+secAns1 +'","'+secQues2+'","'+secAns2+'",' +
      '"'+phone+'","'+address+'","'+areaInt+'")',
      function(err, fields) {
    if(err)
    {
      throw err;
    }
    else
    {
      res.end("Server received the data");
    }
  });

  con.end();
});



//app.use('/', routes);
//app.use(app.router);
//routes.initialize(app);
//app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
 //   next(err);
//});



// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});

//app.use('/', routes);
//app.use('/users', users);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Registration app listening at http://localhost:%s', port)

});

module.exports = app;
