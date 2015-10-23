// http://101.78.220.133:8099/22.316109/114.180459
// http://101.78.220.133:8099/?lat=22.316109&lon=114.180459&zoom=18

var express = require('express');
var app = express();

app.use(express.static(__dirname +  '/graphics'));

app.get("/", function(req,res) {
	var lat  = req.query.lat;
	var lon  = req.query.lon;
	var zoom = req.query.zoom;

	res.render("gmap.ejs",{lat:lat,lon:lon,zoom:zoom});
});

app.listen(process.env.PORT || 8099);
