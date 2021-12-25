import { selectors } from "./agent-DOMselectors";
import "../styles/agent.css";

const searched_agent = window.localStorage.getItem("agent");
console.log(searched_agent);
const data = JSON.parse(window.localStorage.getItem("data"));
console.log(data.abilities);

let info = data.role.description;
let abil_name = data.role.displayName;
console.log(info);
selectors.display.innerHTML = `<h1>${abil_name}</h1><p>${info}</p>`;
selectors.container.insertAdjacentHTML(
  "afterbegin",
  `<img class="agent-img" src=${data.fullPortrait}>`
);
selectors.buttons.insertAdjacentHTML(
  "beforeend",
  `<button id="${data.displayName}" class="button"><img class="button-img" src=${data.role.displayIcon}></button>`
);
if (data.displayName === "Jett") {
}
data.abilities.forEach((ability) =>
  selectors.buttons.insertAdjacentHTML(
    "beforeend",
    `<button id="${ability.displayName}" class="button"><img class="button-img" src=${ability.displayIcon}></button>`
  )
);

document.querySelectorAll(".button").forEach((button) =>
  button.addEventListener("click", function () {
    let name = button.id;
    if (name === data.displayName) {
      let info = data.role.description;
      let abil_name = data.role.displayName;
      console.log(info);
      selectors.display.innerHTML = `<h1>${abil_name}</h1><p>${info}</p>`;
    } else {
      let ability = data.abilities.filter(
        (ability) => ability.displayName === name
      )[0];
      let info = ability.description;
      let abil_name = ability.displayName;
      console.log(info);
      selectors.display.innerHTML = `<h1>${abil_name}</h1><p>${info}</p>`;
    }
  })
);
