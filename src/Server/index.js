const dotenv = require('dotenv');
var path = require('path');
const express = require('express');
const app = express();
//var meaningCloud = require("meaningCloud_textapi")

dotenv.config();
app.use(express.static('dist'))

app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log('Example app listening on port 8081!');
});

// var textapi = new meaningCloud({
//     application_key: process.env.API_KEY
//  });


