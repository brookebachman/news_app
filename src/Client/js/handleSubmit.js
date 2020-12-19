async function handleSubmit(event, defaultText) {
	event.preventDefault();
	console.log('handleSubmit is running');
	let newsData = {};
	const text = defaultText || getTextValue()
	// const baseUrl = `https://api.meaningcloud.com/lang-2.0?key=${apiKey}&txt=${text}`
	const baseUrl = 'http://localhost:8081/test';
	const data = fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			text: text,
		}),
	})
		.then((resp) => resp.json())
        Client.postToFrontend(data);
        return data
}

function getTextValue(){
    const text = document.getElementById('someText').value;
    return text

}


export { handleSubmit };
