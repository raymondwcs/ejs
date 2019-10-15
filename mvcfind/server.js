const express = require('express');
const app = express();
const mongoose = require('mongoose');
const assert = require('assert');
const kittySchema = require('./models/kitty');

app.set('view engine', 'ejs');

app.get("/show", (req,res) => {
	let fields = filterResult(req.query.id);
	mongoose.connect('',{userMongoClient: true});
	const db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
		const Kitten = mongoose.model('Kitten', kittySchema);
		Kitten.find({},fields,(err,results) => {
			assert.equal(err,null);
			db.close();
			res.render("kitties", {kitties: results});
		})
	});
});

// Controller
const filterResult = (id) => {
	fields = (id == "admin") ? "name age -_id" : "name -_id";
	return(fields);
}

app.listen(process.env.PORT || 8099);
