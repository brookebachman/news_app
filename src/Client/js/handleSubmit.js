
function handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit is running")
    let newsData = {};
    const apiKey = process.env.apiKey
    const text = document.getElementById("someText").value
    const baseUrl = `https://api.meaningcloud.com/lang-2.0?key=${apiKey}&txt=${text}`
 
    fetch(baseUrl).then(resp=> resp.json()).then((data) => {
        console.log(data)
        newsData = data
    })
        

}


export {handleSubmit}