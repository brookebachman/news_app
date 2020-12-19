function postToFrontend(newsData) {

    postResults(newsData)
	
}

function postResults(newData){
    if(newsData && Object.keys(newsData).length >= 4) {
        const { polarity, confidence, subjectivity, subjectivity, irony } = newsData
        const results = document.getElementById("results")
	    console.log('postToFrontend', newsData);
        const sentiment = document.createElement('div');
        results.appendChild(sentiment)
        sentiment.id = "sentiment"
        return sentiment.innerHTML += `  
            <div id="polarity">Is this polarizing? ${polarity}</div>
            <div id="confidence"> Is this a confident article? ${confidence}</div>
            <div id="subjectivity">Is this subjective? ${subjectivity}</div>
            <div id="agreement"> Is there agreement? ${agreement}</div>
            <div id="irony"> Is this ironic? ${irony}</div>
            `;
    } else {
        return sentiment.innerHTML +=`<p> Data not available`
    }
}

export { postToFrontend, postResults };
