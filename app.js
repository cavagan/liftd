var express = require('express')
var bodyParser = require('body-parser');
var app = express();


// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 8181);

//handle GET requests
//app.use(express.static(__dirname + '/html'));

//router  to handle POST
app.post('/',function(request,response,){

   var ping = request.body.txt;
   console.log(ping);

} );

//start listening
app.listen(port, function () {
  console.log('liftd listening on port ' + port);
});