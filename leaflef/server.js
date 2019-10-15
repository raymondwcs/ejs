// http://localhost:8099/?lon=22.316109&lat=114.180459&zoom=18

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req,res) => {
	res.render("leaflet.ejs", {
		lat:req.query.lat,
		lon:req.query.lon,
		zoom:req.query.zoom ? req.query.zoom : 15
	});
	res.end();
});

app.listen(process.env.PORT || 8099);
