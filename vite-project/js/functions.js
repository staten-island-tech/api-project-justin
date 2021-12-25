function inner_generator(agent) {
  return `
        <a class="agent-link" href="agent.html" id=${agent.displayName.toLowerCase()}>
        <img class="agent-icon" src=${agent.displayIcon} alt=${
    agent.displayName
  }></a>
      `;
}

export { inner_generator };
