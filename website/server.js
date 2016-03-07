//Get modules.
var express = require('express');
var http = require('http');
/*var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'LuminoPortalKey12356';*/
var app = express();
//exports.secretkey = secret;

app.use(express.bodyParser());
//app.use('/lAPi', expressJwt({secret: secret}));

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/dist'));
app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

//var lwLoginSrv = require('./lwSrvProvider/pgLogin');
//var lwPgSrv = require('./lwSrvProvider/lwPhotographer');
//var lwCustomerSrv = require('./lwSrvProvider/lwCustomer');
var lwUtilitySrv = require('./lwSrvProvider/lwUtility');

app.get('/', function(req, res){
  res.redirect('/index.html');
});
/*Lworks Api backend*/
app.get('/lworks/getStateList', lwUtilitySrv.getstateList);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
