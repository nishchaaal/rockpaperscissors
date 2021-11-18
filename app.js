
const computerPlay = () => {
    let computerChoices = ['rock','paper','scissors'];
    console.log(computerChoices);
    return computerChoices[Math.floor(Math.random() * 3)];
}

const resultCheck = (player1Choice,player2Choice) => {
    if (player1Choice === player2Choice) {
        console.log('Draw!')
        return 'draw';
    } else if (player1Choice === 'rock' && player2Choice  === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return 'win';
    } else if (player1Choice === 'rock' && player2Choice  === 'paper') {
        console.log('You Lose! Paper beats Rock');
        return 'lose';
    } else if (player1Choice === 'scissors' && player2Choice === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        return 'lose';
    } else if (player1Choice === 'scissors' && player2Choice === 'paper') {
        console.log('You Win! Scissors beats Paper');
        return 'win';
    } else if (player1Choice === 'paper' && player2Choice === 'rock') {
        console.log('You Win! Paper beats Rock');
        return 'win';
    } else if (player1Choice === 'paper' && player2Choice === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        return 'lose';
    }       
}

const playRound = (playerSelection ,computerSelection) => {
    computerSelection = computerPlay();
    let playerEntry = prompt('rock / paper / scissors ?');
    playerSelection =  playerEntry.toLowerCase();
    return resultCheck(playerSelection,computerSelection);
}

let round = 1
let player = 0;
let comp = 0;

const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${round}`);
        let roundResult = playRound();
     if (roundResult === 'win') {
         player++;
     } else if (roundResult === 'lose') {
         comp++;
     }
     round +=1;
    }
    if (player === comp) {
        console.log(`${player} : ${comp} - DRAWW`);
    } else if (player > comp) {
        console.log(`${player} : ${comp} - YOU WINNN`);
    } else if (comp > player) {
        console.log(`${player} : ${comp} - YOU LOOSEEE`);
    }
}

