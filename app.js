var express = require('express');
var bodyParser = require('body-parser');
var ellipsisbot = require('./liftdListen');
var app = express();
var port = process.env.PORT || 8181;



//why no commit?
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('You damn shit!') });


 // Route that listens for a POST
 app.post('/liftd',liftd);
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('liftd listening on port ' + port);
});