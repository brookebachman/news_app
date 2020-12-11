function postToFrontend() {
	// const textDiv = document.createElement('div');
    // const text = document.createElement('p');
    // const language = document.createElement('p')
	fetch('http://localhost:8081/getData', {
        method: 'POST', 
        headers: {
            Accept: 'application/json',
			'Content-type': 'application/json'
        },
        body: JSON.stringify({
            text: newsData.text,
            name: newsData.name
        })
		.then((resp) => resp.json())
        .then((data) => console.log(data))
        // text.innerHTML = data.text;
        // language.innerHTML = data.lang
        // textDiv.appendChild(text)
        // textDiv.appendChild(language)
}

export {postToFrontend}
