//Get modules.
var express = require('express');
var http = require('http');
/*var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'LuminoPortalKey12356';*/
var app = express();
//exports.secretkey = secret;
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//app.use('/lAPi', expressJwt({secret: secret}));

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/'));
app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

var multer = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
      console.log("File Orignal name = "+file.originalname);
        if(file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            return false;
        }
      callback(null, Date.now()+'-'+file.originalname);
  },
    limits: {
        fieldNameSize: 50,
        files: 1,
        fields: 5,
        fileSize: 111024 * 111024
    }
});

var upload = multer({ storage: storage  }).array('photos');

//var lwLoginSrv = require('./lwSrvProvider/pgLogin');
//var lwPgSrv = require('./lwSrvProvider/lwPhotographer');
//var lwCustomerSrv = require('./lwSrvProvider/lwCustomer');
var lwUtilitySrv = require('./lwSrvProvider/lwUtility');
app.get('/', function(req, res){
  res.redirect('/index.html');
});
/*Lworks Api backend*/
//app.get('/lworks/getStateList', lwUtilitySrv.getstateList);
app.get('/lworks',lwUtilitySrv.file);
app.post('/api/photo', upload, lwUtilitySrv.imageUpload);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
