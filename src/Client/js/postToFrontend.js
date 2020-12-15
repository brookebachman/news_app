function postToFrontend() {
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
    })
}

export {postToFrontend}
