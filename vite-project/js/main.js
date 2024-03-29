import "../styles/style.css";
import { selectors } from "./DOMselectors";
import { inner_generator } from "./functions";

const URL = "https://valorant-api.com/v1/agents";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    alert(error)
  }
}

const promise = getData(URL);

let agents = [];

promise.then(function (result) {
  console.log(result.data);
  result.data.forEach(function (el) {
    if (el.role != null) {
      agents.push({
        inner: inner_generator(el),
        data: el,
      });
    }
  });
});
selectors.agent_search.onkeyup = function () {
  let query = selectors.agent_search.value.toLowerCase();
  if (query != "") {
    let displayed = agents.filter((agent) =>
      agent.data.displayName.toLowerCase().includes(query)
    );
    selectors.cards.innerHTML = "";
    displayed.forEach((agent) =>
      selectors.cards.insertAdjacentHTML("afterbegin", agent.inner)
    );
    if (selectors.cards.innerHTML === "") {
      selectors.cards.style.padding = "0px";
    } else {
      selectors.cards.style.padding = "20px";
    }
    document.querySelectorAll(".agent-link").forEach((link) =>
      link.addEventListener("click", function () {
        window.localStorage.setItem("agent", link.id);
        let agent_data = agents.filter(
          (agent) =>
            agent.data.displayName.toLowerCase() === link.id.toLowerCase()
        )[0]["data"];
        window.localStorage.setItem("data", JSON.stringify(agent_data));
      })
    );
  } else {
    selectors.cards.innerHTML = "";
    selectors.cards.style.padding = "0px";
  }
};
