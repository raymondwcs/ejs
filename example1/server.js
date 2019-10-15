const express = require('express');
const app = express();

const cafes = [
	{name: 'Pacific Coffee', address: '30 Good Shepherd Street', seats: 30, id:'001'},
	{name: 'Starbucks', address: '1 Victory Road', id:'002'},
	{name: 'UCC Cafe', address: 'New Town Plaza', seats: 120, 'id': '003'}
];

app.set('view engine', 'ejs');

app.get("/read", (req,res) => {
	res.render("list", {c: cafes});
});

app.get('/cafe', (req,res) => {
	if (req.query.id != null) {
		for (var i=0; i<cafes.length; i++) {
			if (cafes[i].id == req.query.id) {
				res.render('details', {c: cafes[i]});				
			}
		}
		res.status(500).end(req.query.id + ' not found!');
	} else {
		res.status(500).end('id missing!');
	}
});

app.get('*', (req,res) => {
	res.redirect('/read');
});

app.listen(process.env.PORT || 8099);
