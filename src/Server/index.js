const dotenv = require('dotenv');
var path = require('path');
const express = require('express');
const app = express();
//const fetch = requires('node-fetch');
//var meaningCloud = require("meaningCloud_textapi")
dotenv.config();
app.use(express.static('dist'))

app.get('/', async function(req,res){
	const apiKey = process.env.apiKey
	const Url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json txt=${req.body.url}&lang=en`
	let response = await fetch(Url)
	try {
		let data = response.json()
		const apiData = {}
		apiData.polarity = data.score_tag
		apiData.agreement = data.agreement
		apiData.irony = data.irony
		apiData.subjectivity = data.subjectivity
		apiData.confidence = data.confidence
		console.log(apiData)
		res.send(apiData)
	} catch (error){
		console.log(error)
	}
	
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


app.post('/addData', function(req, res){
	console.log(req.body)
	newEntry = {
		text: req.body.url,
	}
	newsData = newEntry
	res.send(newsData)
	
})


