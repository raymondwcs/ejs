// http://101.78.220.133:8099/22.316109/114.180459
// http://101.78.220.133:8099/?lat=22.316109&lon=114.180459&zoom=18

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname +  '/public'));

app.get("/", function(req,res) {
	res.render("gmap.ejs", {
		lat:req.query.lat,
		lon:req.query.lon,
		zoom:req.query.zoom}
	);
	res.end();
});

app.listen(process.env.PORT || 8099);
