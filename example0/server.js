var express = require('express');
var app = express();

var cafes = [
	{name: 'Pacific Coffee', address: '30 Good Shepherd Street', seats: 30, id:'001'},
	{name: 'Starbucks', address: '1 Victory Road', id:'002'},
	{name: 'UCC Cafe', address: 'New Town Plaza', seats: 120, 'id': '003'}
];

app.set('view engine', 'ejs');

app.get("/read", function(req,res) {
	res.status(200);
	res.render("table", {c: cafes});	
	//res.render("table", {c: []});
});

app.listen(process.env.PORT || 8099);
