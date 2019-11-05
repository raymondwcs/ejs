var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/simpleinterest', (req,res) => {
   let obj = new SimpleInterest(req.query.p,req.query.r,req.query.t);

   res.render('simpleinterest.ejs',{
      principal : obj.principal,
      rate : obj.rate,
      time : obj.time,
      interest : obj.interest
   })
});

app.listen(app.listen(process.env.PORT || 8099));

class SimpleInterest {
   constructor(p, r, t) {
      this.principal = p;
      this.rate = r;
      this.time = t;
      this.interest = p * r * t;
   }
}