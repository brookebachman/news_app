const dotenv = require('dotenv');
var path = require('path');
const express = require('express');
const app = express();
//var meaningCloud = require("meaningCloud_textapi")
let newsData = {}
dotenv.config();
app.use(express.static('dist'))

app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});

app.get('/getData', function(req,res){
	res.send(newData)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log('Example app listening on port 8081!');
});

// var textapi = new meaningCloud({
//     application_key: process.env.API_KEY
//  });

app.post('/addData', function(req, res){
	console.log(req.body)
	newEntry = {
		text: req.body.text,
		language: req.body.language
	}
	newsData = newEntry
	res.send(newData)
	
})


