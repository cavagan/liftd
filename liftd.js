// liftd responder.
module.exports = function (req, res, next) {
  //var userName = req.body.user_name;
  //var userText = req.body.text.split(' ');
 //var curmudgName = userText[1];
 //var curmudgScore = userText[0];
 var text = req.body.txt;
  
  var botPayload = {
    text : ' got a ping '
					};
 
 
 
 if (text !== '' ) {
	  console.log(botPayload);
    //return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
  /*
}