import './style.css'

const URL = "https://valorant-api.com/v1/agents"

async function getData(URL){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        return data
    } catch(error) {
        console.log(error);
    }
}

const promise = getData(URL)
let data;
promise.then((result) => data = result)
console.log(data)