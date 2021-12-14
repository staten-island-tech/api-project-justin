function inner_generator (agent){
    return `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3 class="agent-name">${agent.developerName}</h3>
        <img class="agent-icon" src=${agent.displayIcon} alt="Breach">
        <div class="agent-role">
          <img class="role-icon" src=${agent.role.displayIcon}>
          <h5 class="role-name">${agent.role.displayName}</h5>
        </div>
      </div>
      <div class="flip-card-back">
        <p class="agent-description">${agent.description}</p>
      </div>
    </div>
  </div>`
}

export { inner_generator }