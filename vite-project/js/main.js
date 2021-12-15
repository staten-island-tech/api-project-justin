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

let agents;
let data;
promise.then(function(result){
    console.log(result.data)
    console.log(selectors.body)
    result.data.forEach(function(element){
        if(element.role != null){
            selectors.cards.insertAdjacentHTML('afterbegin', inner_generator(element))
        }
        
    });
    data = result.data;
})