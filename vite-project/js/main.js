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

let agents = [];
let data; 
promise.then(function(result){
    console.log(result.data)
    result.data.forEach(function(el){
        if(el.role != null){
            agents.push({
                inner: (inner_generator(el)),
                data: el
            })
        }
    });
})

console.log(selectors.agent_submit)
selectors.agent_submit.addEventListener("click", function(e){
    e.preventDefault();
    let searched_names = agents.filter(
        (agent) => agent.data.displayName.toLowerCase() === selectors.agent_search.value.toLowerCase()
    )
    console.log(JSON.parse(JSON.stringify((agents.filter((agent) => agent.data.displayName === "Reyna"))[0]["data"])))
    selectors.cards.innerHTML = ""
    searched_names.forEach((agent) => selectors.cards.insertAdjacentHTML("afterbegin", 
        agent.inner
    ))
    document.querySelectorAll(".agent-link").forEach(link => link.addEventListener('click', function(){
        window.localStorage.setItem("agent", link.id)
        let agent_data = agents.filter(agent => agent.data.displayName.toLowerCase() === link.id.toLowerCase())[0]["data"]
        window.localStorage.setItem("data", JSON.stringify(agent_data))
        
    }))
})
