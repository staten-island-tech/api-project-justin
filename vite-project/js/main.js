import '../styles/style.css'
import { selectors } from './DOMselectors'

const URL = "https://valorant-api.com/v1/agents"

async function getData(URL){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data
    } catch(error) {
        console.log(error);
    }
}

const promise = getData(URL)

let data;
promise.then(function(result){
    console.log(result.data[0])
    console.log
    selectors.datashow.innerHTML =  `<img src=${result.data[0].killfeedPortrait}>`
    data = result.data
})

selectors.test.addEventListener('click', function(){
    console.log(data)
})
