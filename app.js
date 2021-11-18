
// variables
const playerTitle = document.querySelector('.player-title');
const computerTitle = document.querySelector('.computer-title');
const playerImg = document.querySelector('.player-img');
const computerImg = document.querySelector('.computer-img');
const choiceRock = document.querySelector('.choice-rock');
const choicePaper = document.querySelector('choice-paper');
const choiceScissors = document.querySelector('choice-scissors');
const playerOptions = document.querySelectorAll('.player-options');
const result = document.querySelector('.result');
const restartButton = document.querySelector('.btn');
let playerEntry = 0;

// Funtions

const computerPlay = () => {
    let computerChoices = ['rock','paper','scissors'];
    let comp = computerChoices[Math.floor(Math.random() * 3)];
    computerImg.src = `./img/${comp}.jpg`;
    return comp;
}

const playRound = (player1Choice,player2Choice) => {
    if (player1Choice === player2Choice) {
        result.textContent = 'ROUND DRAW!!!';
        result.style.color = '#484848';
        return 'draw';
    } else if (player1Choice === 'rock' && player2Choice  === 'scissors') {
        result.textContent = 'ROUND WIN!!!';
        result.style.color = '#2F9B33';
        return 'win';
    } else if (player1Choice === 'rock' && player2Choice  === 'paper') {
        result.textContent = 'ROUND LOST!!!';
        result.style.color = '#FF0000';
        return 'lose';
    } else if (player1Choice === 'scissors' && player2Choice === 'rock') {
        result.textContent = 'ROUND LOST!!!';
        result.style.color = '#FF0000';
        return 'lose';
    } else if (player1Choice === 'scissors' && player2Choice === 'paper') {
        result.textContent = 'ROUND WIN!!!';
        result.style.color = '#2F9B33';
        return 'win';
    } else if (player1Choice === 'paper' && player2Choice === 'rock') {
        result.textContent = 'ROUND WIN!!!';
        result.style.color = '#2F9B33';
        return 'win';
    } else if (player1Choice === 'paper' && player2Choice === 'scissors') {
        result.textContent = 'ROUND LOST!!!';
        result.style.color = '#FF0000';
        return 'lose';
    }       
}

let playerScore = 0;
let computerScore = 0;

const game = () => {
    
    let roundResult = playRound(playerEntry, computerPlay());
    if (roundResult === 'win') {
        playerScore++;
        playerTitle.textContent = `Player: ${playerScore}`;
    } else if (roundResult === 'lose') {
        computerScore++;
        computerTitle.textContent = `Computer: ${computerScore}`;
    }

    if (playerScore === 5) {
        result.textContent = 'MATCH WIN!!!';
        result.style.color = '#2F9B33';
        playerOptions.forEach((option) => {
            option.removeEventListener('click', events);
        });
    } else if (computerScore === 5) {
        result.textContent = 'MATCH LOST!!!';
        result.style.color = '#FF0000';
        playerOptions.forEach((option) => {
            option.removeEventListener('click', events);
        });
    }
}


// this function resets everything
const restart = () => {
    playerTitle.textContent = 'Player: 0';
    computerTitle.textContent = 'Computer: 0';
    playerImg.src = './img/placeholder.jpg';
    computerImg.src = './img/placeholder.jpg';
    result.textContent = '';
    playerOptions.forEach((option) => {
        option.addEventListener('click', events);
    });
    playerScore = 0;
    computerScore = 0;
}

const events = (e) => {
    playerEntry = e.target.alt;
    playerImg.src = `./img/${playerEntry}.jpg`;
    game();
}

// Event Listeners

playerOptions.forEach((option) => {
    option.addEventListener('click', events);
});

restartButton.addEventListener('click', restart)