var express = require('express');
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');
var MONGODBURL = 'mongodb://localhost/test';
var kittySchema = require('./models/kitty');
var db = mongoose.connection;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
	res.sendFile('index.html');  // serve static files
});

app.get('/new', function(req,res) {
	res.write('<html><body><h1>Under Construction</h1>');
	res.write('<a href="/">Go Home</a>');
	res.end();
});

app.get('/show', function(req,res) {
	res.write('<html><body><h1>Under Construction</h1>');
	res.write('<a href="/">Go Home</a>');
	res.end();
});

app.listen(process.env.PORT || 8099);
