// RADIO BUTTONS
const five = document.querySelector('#five')
const ten = document.querySelector('#ten')
const fifteen = document.querySelector('#fifteen')
const twenty = document.querySelector('#twenty')

// ROUND COUNTS
const currentRound = document.querySelector('#currentRound')
const totalRounds = document.querySelector('#totalRounds')

// SCORE
const userScoreDOM = document.querySelector('#scoreUser')
const computerScoreDOM = document.querySelector('#scoreComp')

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
const paragraphRounds = document.querySelector('#paragraphRounds')
const scoreCount = document.querySelector('.scoreCount')
const userOutput = document.querySelector('#userOutput')

// COUNTING VARIABLES
let totalRoundsCount = 0
let currentRoundCount = 0;

let userScoreOutput = 0
let comScoreOutput = 0

function calculateComScore() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1)
}

function setImage(comScore) {
    if (comScore == 1) {
        console.log('moin');
    } else if (comScore == 2) {
        console.log('doppel moin')
    } else {
        console.log('dreifach moin');
    }
}

function userWins() {
    userOutput.innerHTML = 'USER WINS';
    userScoreOutput++;
    userScoreDOM.innerHTML = userScoreOutput.toString();
}

function comWins() {
    userOutput.innerHTML = 'COM WINS';
    comScoreOutput++;
    computerScoreDOM.innerHTML = comScoreOutput.toString();
}

function limit() {
    alert('Ich weiß noch nicht wer gewonnen hat')
    if (userScoreOutput > comScoreOutput) {
        alert('user won')
     } else if (userScoreOutput < comScoreOutput) {
        alert('user lost')
     } else {
        alert('user')
     }
}

function setRound() {
    currentRoundCount++
    console.log(currentRoundCount);
    currentRound.innerHTML = currentRoundCount;
    if (currentRoundCount === totalRoundsCount) {
        limit()
    }
}

function startRound(userScore) {
    let comScore = calculateComScore();
    setImage(comScore);
    setRound();
    console.log(userScore, comScore);
    if (userScore == 1 && comScore == 3) {
        userWins();
    } else if (userScore == 3 && comScore == 1) {
        comWins();
    } else if (userScore == 2 && comScore == 1) {
        userWins();    
    } else if (userScore == 1 && comScore == 2) {
        comWins();
    } else if (userScore == 3 && comScore == 1) {
        userWins();
    } else if (userScore == 1 && comScore == 3) {
        comWins();
    } else if (userScore == 3 && comScore == 2) {
        userWins();
    } else if (userScore == 2 && comScore == 3) {
        comWins();
    } else if (userScore == comScore) {
        userOutput.innerHTML = 'REMI!';
    }
}

function changeDOM() {
    paragraphRounds.style.display = 'none'
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

rock.addEventListener('click', () => {
    let v;
    v = 1
    startRound(v)
})
paper.addEventListener('click', () => {
    let v;
    v = 2
    startRound(v)
})
scissor.addEventListener('click', () => {
    let v;
    v = 3
    startRound(v)
})

start.addEventListener('click', startGame)

