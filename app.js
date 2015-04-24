var express = require('express')
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8181;
var fs = require('fs');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 8181);

//handle GET requests
app.get('/', function (req, res) { res.status(200).send('You damn shit!') });

//router  to handle POST
app.post('/',function(request,res){

   var ping = JSON.stringify(request.body);
   logText = ping + '\n';
   fs.appendFile('imAlive.txt', logText,function(err){
   if (err) return console.log(err);
   console.log(ping);
   });
   res.end("yes");
} );

//start listening
app.listen(port, function () {
  console.log('liftd listening on port ' + port);
});
