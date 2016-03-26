var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //alert(res);
});

module.exports = router;

/// / /*var express = require('express');
// var router = express.Router();
// var mysql = require('mysql');
//
//
// router.get('/', function(req, res) {
//   //res.render('index');
//   res.sendfile('views/Register.html');
// });
//
// router.post('/reg',function(req,res){
//
//   var userData = req.body;
//   var data = {
//     userid: userData.userid,
//     password : userData.pwd,
//     email: userData.email,
//     secQues1 : userData.securityQues1,
//     secAns1:userData.secQuesAns1,
//     secQues2: userData.securityQues2,
//     secAns2: userData.secQuesAns2,
//   phone: userData.phone,
//   address: userData.address,
//   areasInt: userData.areaInt
//   };
//
//   var userid = req.body.userid;
//
//   console.log(userid);
//   var con = mysql.createConnection({
//     host: "127.0.0.1",
//     port : '3306',
//     user: "root",
//     password: "maithili@123",
//     database: "cmpe280_assign"
//   });
//
//   con.connect( function(err){
//     if (err){
//       throw err;
//     }
//     else {
//       console.log('Connected');
//     }
//   });
//
//   con.query('INSERT INTO registration_ajax1 (user_id) VALUES ("'+userid+'")', function(err, fields) {
//     if(err)
//     {
//       throw err;
//     }
//     else
//     {
//       res.end("Server received the data");
//     }
//   });
//
//   con.end();
// });
//
// module.exports = router; */