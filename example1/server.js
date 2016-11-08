var express = require('express');
var app = express();

var cafes = [
	{name: 'Pacific Coffee', address: '30 Good Shepherd Street', seats: 30, id:'001'},
	{name: 'Starbucks', address: '1 Victory Road', id:'002'},
	{name: 'UCC Cafe', address: 'New Town Plaza', seats: 120, 'id': '003'}
];

app.set('view engine', 'ejs');

app.get("/read", function(req,res) {
	res.render("list", {c: cafes});
});

app.get('/showdetails', function(req,res) {
	if (req.query.id != null) {
		for (var i=0; i<cafes.length; i++) {
			console.log(cafes[i].id);
			if (cafes[i].id == req.query.id) {
				var cafe = cafes[i];
				break;
			}
		}
		if (cafe != null) {
			res.render('details', {c: cafe});
		} else {
			res.status(500).end(req.query.id + ' not found!');
		}
	} else {
		res.status(500).end('id missing!');
	}
});

app.listen(process.env.PORT || 8099);
