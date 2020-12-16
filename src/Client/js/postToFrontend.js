function postToFrontend(newsData) {
    const results = document.getElementById("results")
	console.log('postToFrontend', newsData);
    const sentiment = document.createElement('div');
    results.appendChild(sentiment)
    sentiment.id = "sentiment"
	sentiment.innerHTML += `  
            <div id="polarity">Is this polarizing? ${newsData.polarity}</div>
            <div id="confidence"> Is this a confident article? ${newsData.confidence}</div>
            <div id="subjectivity">Is this subjective? ${newsData.subjectivity}</div>
            <div id="agreement"> Is there agreement? ${newsData.agreement}</div>
            <div id="irony"> Is this ironic? ${newsData.irony}</div>
            `;

	//})
}

export { postToFrontend };
