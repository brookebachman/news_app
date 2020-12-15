function postToFrontend(newsData) {
	fetch('http://localhost:8081/getData', {
        method: 'POST', 
        headers: {
            Accept: 'application/json',
			'Content-type': 'application/json'
        },
        body: JSON.stringify({
            text: newsData.text
        })
    })
		.then((resp) => resp.json())
        .then((data) => {
            const sentiment = document.createElement('div')
            sentiment.innerText = "Sentiment"
            sentiment.id = "sentiment"
            sentiment.innerHTML += `  
            <div id="polarity"></div>
            <div id="confidence"></div>
            <div id="subjectivity"></div>
            <div id="agreement"></div>
            <div id="irony"></div>
            `

        })
    
}

export {postToFrontend}
