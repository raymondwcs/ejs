var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.listen(app.listen(process.env.PORT || 8099));

class SimpleInterest {
   constructor(p, i, t) {
      this.principal = p;
      this.rate = i;
      this.time = t;
      this.interest = p * i * t;
   }
}