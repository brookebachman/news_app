const dotenv = require('dotenv');
var path = require('path');
const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fetch = require('node-fetch');
//const fetch = requires('node-fetch');
//var meaningCloud = require("meaningCloud_textapi")
dotenv.config();
app.use(express.static('dist'));
app.use(cors());

app.post('/test', async function (req, res) {
	console.log('hit route');
	const apiKey = process.env.API_KEY;
	console.log(apiKey);
	const Url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${req.body.text}&lang=en`;
	let response = await fetch(Url);
	try {
		let data = await response.json();
		console.log(data);
		const apiData = {};
		apiData.polarity = data.score_tag;
		apiData.agreement = data.agreement;
		apiData.irony = data.irony;
		apiData.subjectivity = data.subjectivity;
		apiData.confidence = data.confidence;
		console.log(apiData);
		res.send(apiData);
	} catch (error) {
		console.log(error);
	}
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log('Example app listening on port 8081!');
});

app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});
