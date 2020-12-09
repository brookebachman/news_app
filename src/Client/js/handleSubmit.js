
document.getElementById('form').addEventListener("click", handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    let newsData = {};
    const apiKey = process.env.apiKey
    const text = document.getElementById("someText").value
    const baseUrl = `https://api.meaningcloud.com/lang-2.0?key=${apiKey}&txt=${text}`
 
    const getNews = async (baseUrl) => {
        console.log("get news is running")
        const response = await fetch(baseUrl, {
            
        });
        try {
            const projectData = await response.json();
            
            //sunsetCheck(changeTime(), projectData)
            //updateFrontend(projectData);
            console.log(projectData.language_list, 'this is new data');
            return projectData
        } catch (error) {
            console.log(error, 'error');
        
        }

    }
}


export {handleSubmit}