const searched_agent = window.localStorage.getItem("agent")
console.log(searched_agent)
const data = JSON.parse(window.localStorage.getItem("data"))
console.log(data)

const agent = data.filter(agent => agent.displayName === searched_agent)