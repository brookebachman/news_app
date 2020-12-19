const {handleSubmit} = require('../src/Client/js/handleSubmit')

const fakeEvent = {
    preventDefault(){
        return true
    }
}
let data;

window.Client = {postToFrontend() {
    return true
}}

window.fetch = () => {
    return new Promise(function(resolve, reject){
        console.log("first.then")
        resolve({
            json(){
                return new Promise ((resolve)=> {
                    console.log("second.then")
                    resolve(data)
                })
            }
        })
    })
}


test('Sees that the user entered an url', async () => {
    data = {confidence: '100',score_tag: 'NONE',
    agreement: 'AGREEMENT'}
    const result = await handleSubmit(fakeEvent, "https://denver.cbslocal.com/2020/12/17/covid-long-haulers-symptoms-colorado/")
    expect(result.hasOwnProperty("score_tag")).toBe(true)
})