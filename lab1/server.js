var express = require('express');
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');
var MONGODBURL = 'mongodb://localhost/test';
var kittySchema = require('./models/kitty');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');  // serve static files
});

app.get('/new', function(req,res) {
	res.write('<html><body><h1>Under Construction</h1>');
	res.write('<a href="/">Go Home</a></body></html>');
	res.end();
});

app.get('/show', function(req,res) {
	res.write('<html><body><h1>Under Construction</h1>');
	res.write('<a href="/">Go Home</a></body></html>');
	res.end();
});

app.listen(process.env.PORT || 8099);
