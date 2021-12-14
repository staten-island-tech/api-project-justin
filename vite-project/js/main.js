import '../styles/style.css'
import { selectors } from './DOMselectors'
import { inner_generator } from './functions';

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
    selectors.datashow.innerHTML =  inner_generator(result.data[0])
    data = result.data
})

selectors.test.addEventListener('click', function(){
    console.log(data)
})
