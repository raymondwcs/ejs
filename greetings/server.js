const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res) {
	console.log('Incoming request: %s', req.path);
	res.render("welcome", {greetMsg: greetingMessage()});
});

const greetingMessage = () => {
    const dateToday = new Date();
    const theHour = dateToday.getHours();
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
