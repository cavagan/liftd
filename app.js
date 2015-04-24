var express = require('express')
, async = require('async')
 , http = require('http');
 var bodyParser = require('body-parser');

 
 
var app = express();


// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8181);

app.use(express.static(__dirname + '/html'));

//app.use(express.bodyParser());

app.post('/liftd/',function(request,response,next){

   var ping=request.body.txt;
   console.log(ping);

} );


http.createServer(app).listen(app.get('port'), function(){
 console.log('Express server listening on port ' + app.get('port'));
});