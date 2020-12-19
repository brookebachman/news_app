import { template} from '../src/Client/js/postToFrontend.js'

test('Template function should return html', () => {
    const news = {confidence: '100', irony: 'NONIRONIC',
    agreement: 'AGREEMENT', polarity: 'NONE'}
    const result =  template(news)
    const newsArray = result.match(/NONE</gm)
    expect(newsArray.length > 0).toBe(true)
})