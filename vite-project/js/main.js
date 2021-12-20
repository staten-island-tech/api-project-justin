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
    let searched_name = agents.filter(
        (agent) => agent.data.displayName.toLowerCase() === selectors.agent_search.value.toLowerCase()
    )
    selectors.cards.innerHTML = ""
    searched_name.forEach((agent) => selectors.cards.insertAdjacentHTML("afterbegin", 
        agent.inner
    ))
    document.querySelectorAll(".agent-link").forEach(agent => agent.addEventListener('click', function(){
        window.localStorage.setItem("agent", agent.id)
    }))
})
