var express = require('express')
 , http = require('http');

var app = express();

app.set('port', process.env.PORT || 8181);

app.use(express.static(__dirname + '/html'));

app.use(express.bodyParser());

app.post('/liftd/',function(request,response,next){

   var keyName=request.body.Key;
   console.log(keyName);

} );


http.createServer(app).listen(app.get('port'), function(){
 console.log('Express server listening on port ' + app.get('port'));
});