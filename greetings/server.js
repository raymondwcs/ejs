var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res) {
	console.log('Incoming request: %s', req.path);
	res.render("welcome", {greetMsg: greetingMessage()});
});

function greetingMessage() {
    var dateToday = new Date();
    var theHour = dateToday.getHours();
    if (theHour > 18) {
        gMessage = 'Good Evening';
    } else if (theHour > 12) {
        gMessage = 'Good Afternoon';
    } else {
        gMessage = 'Good Morning';
    }
    return gMessage;
}

app.listen(process.env.PORT || 8099);
