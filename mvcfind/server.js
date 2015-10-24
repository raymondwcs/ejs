var express = require('express');
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');
var MONGODBURL = 'mongodb://localhost/test';
var kittySchema = require('./models/kitty');
var db = mongoose.connection;

app.set('view engine', 'ejs');

app.get("/show", function(req,res) {
	var fields = filterResult(req.query.id);
	mongoose.connect(MONGODBURL, function(err) {
		assert.equal(err,null);
		var Kitten = mongoose.model('Kitten', kittySchema);
		Kitten.find({},fields,function(err,results) {
			assert.equal(err,null);
			db.close();
			res.render("kitties", {kitties: results});
			res.end();
		})
	});
});

// Controller
function filterResult(id) {
	fields = (id == "admin") ? "name age -_id" : "name -_id";
	return(fields);
}

app.listen(process.env.PORT || 8099);
