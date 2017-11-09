var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.listen(app.listen(process.env.PORT || 8099));

function SimpleInterest(P,i,t) {
   this.principal = P;
   this.rate = i;
   this.time = t;
   this.interest = P * i * t;
}