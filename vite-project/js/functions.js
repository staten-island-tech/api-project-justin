function inner_generator (agent){
    return `<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h4>${agent.developerName}</h4>
        <img src=${agent.displayIcon} alt="Breach">

        <h5>Small: ${agent.role.displayName}</h5>
        <img src=${agent.role.displayIcon}>

      </div>
      <div class="flip-card-back">
      </div>
    </div>
  </div>`
}

export { inner_generator }