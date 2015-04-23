// liftd responder.
module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var userText = req.body.text.split(' ');
 var curmudgName = userText[1];
 var curmudgScore = userText[0];
  
  var botPayload = {
    text : ' Thank you. I have given ' + curmudgName + ' an additional curmudgeon score of  ' + curmudgScore + ' umm also DB says '
					};
 
  // avoid infinite loop
  if (userName !== 'slackbot' ) {
	  
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}