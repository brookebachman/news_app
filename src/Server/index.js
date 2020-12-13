const dotenv = require('dotenv');
var path = require('path');
const express = require('express');
const app = express();
const fetch = requires('node-fetch');
//var meaningCloud = require("meaningCloud_textapi")
dotenv.config();
app.use(express.static('dist'))

app.get('/', async function(req,res){
	const apiKey = process.env.apiKey
	const Url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json txt=${req.body.url}&lang=en`
	let response = await fetch(Url)
	let data = response.json()
	const apiData = {}
	apiData.polarity = data.score_tag
    apiData.agreement = data.agreement
    apiData.irony = data.irony
    apiData.subjectivity = data.subjectivity
    apiData.confidence = data.confidence
    res.send(apiData)
})

app.get('/', function (req, res) {
	res.sendFile(req.body);
});


app.get('/getData', function(req,res){
	res.send(newsData)
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
		text: req.body.url,
		
	}
	newsData = newEntry
	res.send(newData)
	
})


