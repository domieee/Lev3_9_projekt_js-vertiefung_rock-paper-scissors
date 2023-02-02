// RADIO BUTTONS
const five = document.querySelector('#five')
const ten = document.querySelector('#ten')
const fifteen = document.querySelector('#fifteen')
const twenty = document.querySelector('#twenty')

// ROUND COUNTS
const currentRound = document.querySelector('#currentRound')
const totalRounds = document.querySelector('#totalRounds')

// SCORE
const userScore = document.querySelector('scoreUser')
const computerScore = document.querySelector('scoreComp')

// ROCK, PAPER, SCISSOR
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')

// BUTTONS
const radioWrap = document.querySelector('.radioWrap')
const buttonWrap = document.querySelector('.buttonWrap')
const roundCount = document.querySelector('.roundCount')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')


// GAMEPLAY
const gameplay = document.querySelector('.gameplay')
const scoreCount = document.querySelector('.scoreCount')

// COUNTING VARIABLES
let totalRoundsCount = 0
let currentRoundCount;

let scoreUser = 0
let scoreCom = 0


function changeDOM() {
    radioWrap.style.display = 'none'
    roundCount.style.display = 'flex'
    gameplay.style.display = 'flex'
    scoreCount.style.display = 'flex'
    start.style.display = 'none'
    reset.style.display = 'block'
    buttonWrap.style.display = 'flex'
    totalRounds.innerHTML = totalRoundsCount;
}

function startGame() {
    if (totalRoundsCount === 0) {
        if (five.checked) {
            totalRoundsCount = 5
        } else if (ten.checked) {
            totalRoundsCount = 10
        }
        else if (fifteen.checked) {
            totalRoundsCount = 15
        }
        else if (twenty.checked) {
            totalRoundsCount = 20
            console.log(totalRounds);
        } else {
            alert('Please select how much rounds you want to play')
            return
        }
    }
    changeDOM();
}

// TODO: RESET BUTTON VISIBLE
// TODO: outputGameplay visisble

start.addEventListener('click', startGame)

rock.addEventListener('click', startRound)
paper.addEventListener('click', startRound)
scissor.addEventListener('click', startRound)

