import { selectors } from "./agent-DOMselectors";
import "../styles/agent.css";

const searched_agent = window.localStorage.getItem("agent");
console.log(searched_agent);
const data = JSON.parse(window.localStorage.getItem("data"));
console.log(data.abilities);

let info = data.role.description;
let abil_name = data.role.displayName;
console.log(info);
selectors.display.innerHTML = `<h3>${abil_name}</h3><p>${info}</p>`;
selectors.container.insertAdjacentHTML(
  "afterbegin",
  `<img class="agent-img" src=${data.fullPortrait}>`
);
selectors.buttons.insertAdjacentHTML(
  "beforeend",
  `<button id="${data.displayName}" class="button"><img class="button-img" src=${data.role.displayIcon}></button>`
);
selectors.name.innerHTML = `<h1>${data.displayName}</h1>`;
let ability_order = ["Grenade", "Ability1", "Ability2", "Ultimate"];
let buttons = [];
if (data.displayName === "Jett") {
  ability_order.unshift("Passive");
}
ability_order.forEach((slot) =>
  buttons.push(data.abilities.filter((ability) => ability.slot === slot)[0])
);
buttons.forEach((ability) =>
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
      selectors.display.innerHTML = `<h3>${abil_name}</h3><p>${info}<h2>`;
    } else {
      let ability = buttons.filter(
        (ability) => ability.displayName === name
      )[0];
      let info = ability.description;
      let abil_name = ability.displayName;
      selectors.display.innerHTML = `<h3>${abil_name}</h3><p>${info}</p>`;
    }
  })
);
