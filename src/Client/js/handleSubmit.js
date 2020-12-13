
function handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit is running")
    let newsData = {};
 
    const text = document.getElementById("someText").value
    // const baseUrl = `https://api.meaningcloud.com/lang-2.0?key=${apiKey}&txt=${text}`
    const baseUrl = 'http://localhost:8080/'
 
    fetch(baseUrl, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application.json'
        },
        body : JSON.stringify({
            url: text
        })
    }).then(resp=> resp.json()).then((data) => {
        console.log(data)
        newsData = data
    })
    Client.postToFrontend(data)

}


export {handleSubmit}