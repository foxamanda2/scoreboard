function main() {
  // Team 1 Add
  let scoreTeam1 = 0
  const addT1 = document.querySelector('.team1 fieldset i.add')
  function plus1() {
    scoreTeam1++
    if (scoreTeam1 <= 21) {
      const thingClickedOn = document.querySelector('.team1 h3')
      thingClickedOn.textContent = `${scoreTeam1}`
    }
    if (scoreTeam1 === 21) {
      const teamHeader = document.querySelector('.team1 h2')
      const teamOneName = teamHeader.textContent
      const winnerView = document.querySelector('.team1 footer')
      winnerView.textContent = `${teamOneName} Won`
    }
  }
  addT1.addEventListener('click', plus1)
  // Team 1 Subtract
  const subtractT1 = document.querySelector('.team1 fieldset i.subtract')
  function subtract1() {
    if (scoreTeam1 === 0) {
      window.alert('You cant lose anymore than 0')
    }
    if (scoreTeam1 > 0) {
      const thingClickedOn = document.querySelector('.team1 h3')
      scoreTeam1--
      thingClickedOn.textContent = `${scoreTeam1}`
    }
  }
  subtractT1.addEventListener('click', subtract1)
  // Team 1 Name
  function updateListName1(event) {
    const listName = document.querySelector('.team1 h2')
    listName.textContent = event.target.value
    console.log(event.target.value)
    console.log(event)
  }
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateListName1)

  // Team 2 Add
  let scoreTeam2 = 0
  const addT2 = document.querySelector('.team2 fieldset i.add')
  function plus2() {
    scoreTeam2++
    if (scoreTeam2 <= 21) {
      const thingClickedOn = document.querySelector('.team2 h3')
      thingClickedOn.textContent = `${scoreTeam2}`
    }
    if (scoreTeam2 === 21) {
      const teamHeader = document.querySelector('.team2 h2')
      const teamTwoName = teamHeader.textContent
      const winnerView = document.querySelector('.team2 footer')
      winnerView.textContent = `${teamTwoName} Won`
    }
  }
  addT2.addEventListener('click', plus2)
  // Team 2 Subtract
  const subtractT2 = document.querySelector('.team2 fieldset i.subtract')
  function subtract2() {
    if (scoreTeam2 === 0) {
      window.alert('You cant lose anymore than 0')
    }
    if (scoreTeam2 > 0) {
      const thingClickedOn = document.querySelector('.team2 h3')
      scoreTeam2--
      thingClickedOn.textContent = `${scoreTeam2}`
    }
  }
  subtractT2.addEventListener('click', subtract2)
  // Team 2 Name
  function updateListName2(event) {
    const listName = document.querySelector('.team2 h2')
    listName.textContent = event.target.value
    console.log(event.target.value)
    console.log(event)
  }
  document
    .querySelector('.team2 input')
    .addEventListener('input', updateListName2)

  // Reset score
  const resetGame = document.querySelector('.newGame button')
  function newGame() {
    // Team 1
    const team1Scores = document.querySelector('.team1 h3')
    const name1Reset = document.querySelector('.team1 h2')
    const win1Reset = document.querySelector('.team1 footer')
    // Team2
    const team2Scores = document.querySelector('.team2 h3')
    const name2Reset = document.querySelector('.team2 h2')
    const win2Reset = document.querySelector('.team2 footer')
    // Team 1 Reset
    name1Reset.textContent = 'Team 1'
    team1Scores.textContent = 0
    scoreTeam1 = 0
    win1Reset.textContent = ''
    // Team 2 Reset
    name2Reset.empty
    team2Scores.textContent = 0
    scoreTeam2 = 0
    win2Reset.textContent = ''
  }
  resetGame.addEventListener('click', newGame)
}

document.addEventListener('DOMContentLoaded', main)
