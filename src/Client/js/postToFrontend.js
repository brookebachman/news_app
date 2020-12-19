function postToFrontend(newsData, defaultText) {
	console.log(newsData);
	const news = newsData || defaultText;
	const results = document.getElementById('results');
	const sentiment = document.createElement('div');
	sentiment.id = 'sentiment';
	sentiment.innerHTML = template(news)
	results.appendChild(sentiment);
}


function template(news){
    return `
    <div id="polarity"> Is this polarizing? ${news.polarity}</div>
    <div id="confidence"> Confidence? ${news.confidence}</div>
    <div id="subjectivity"> Subjective?${news.subjectivity}</div>
    <div id="agreement"> Is there agreement?${news.agreement}</div>
    <div id="irony">Ironic? ${news.irony}</div>
    `

}
export { postToFrontend, template };
