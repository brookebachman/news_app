alert("I EXIST")
//import {} from './js/blah.js'


let newsData = {};
const apiKey = "2337d26fa8c0e16a0f9aada9a71d3bf1"
const url = "https://www.bbc.com/news/world-us-canada-55224893/"
const text = "ನಾನು ಕೋಡ್ ಬರೆಯಲು ಇಷ್ಟಪಡುತ್ತೇನೆ"
const baseUrl = `https://api.meaningcloud.com/lang-2.0?key=${apiKey}&txt=${text}`
// function performAction(event){
//     event.preventDefault();
//     getNews(baseUrl, apiKey)
// }

const getNews1 = async (baseUrl) => {
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
getNews1(baseUrl, apiKey)