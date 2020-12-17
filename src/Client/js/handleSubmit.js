function handleSubmit(event) {
	event.preventDefault();
	console.log('handleSubmit is running');
	let newsData = {};

	const text = document.getElementById('someText').value;
	// const baseUrl = `https://api.meaningcloud.com/lang-2.0?key=${apiKey}&txt=${text}`
	const baseUrl = 'http://localhost:8081/test';
	fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			text: text,
		}),
	})
		.then((resp) => resp.json())
		.then(function (data) {
			Client.postToFrontend(data);
		})
		.catch(function (error) {
			console.log('Request failed', error);
		}); 
}
export { handleSubmit };
