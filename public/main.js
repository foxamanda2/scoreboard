function main() {
  // Team 1 ADD
  let scoreTeam1 = 0
  const addT1 = document.querySelector('.team1 fieldset i.add')
  function plus1() {
    const thingClickedOn = document.querySelector('.team1 h3')

    thingClickedOn.textContent = `${scoreTeam1++}`
  }
  addT1.addEventListener('click', plus1)
  // Team 1 Subtract
  const subtractT1 = document.querySelector('.team1 fieldset i.subtract')
  function subtract1() {
    const thingClickedOn = document.querySelector('.team1 h3')

    thingClickedOn.textContent = `${scoreTeam1--}`
  }
  subtractT1.addEventListener('click', subtract1)

  // Team 2 Add
  let scoreTeam2 = 0
  const addT2 = document.querySelector('.team2 fieldset i.add')
  function plus2() {
    const thingClickedOn = document.querySelector('.team2 h3')

    thingClickedOn.textContent = `${scoreTeam2++}`
  }
  addT2.addEventListener('click', plus2)
  // Team 2 Subtract
  const subtractT2 = document.querySelector('.team2 fieldset i.subtract')
  function subtract2() {
    const thingClickedOn = document.querySelector('.team2 h3')

    thingClickedOn.textContent = `${scoreTeam2--}`
  }

  subtractT2.addEventListener('click', subtract2)
}

document.addEventListener('DOMContentLoaded', main)
