"use strict";

const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase()
}

//console.log(getComputerChoice());

function singleGameRound(playerChoice, computerChoice) {
    let gameResult = '';
    if (playerChoice == computerChoice) {
        console.log("It's a tie.");
        singleGameRound(playerChoice, getComputerChoice());
    }

    if (playerChoice == 'rock' && computerChoice == 'paper') {
        gameResult = 'You lose. Paper beats rock.'
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        gameResult = 'You win. Rock beats scissors.'
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        gameResult = 'You win. Scissors beat paper.'
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        gameResult = 'You lose. Rock beats scissors.'
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        gameResult = 'You win. Paper beats rock.'
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        gameResult = 'You lose. Scissors beats paper.'
    }
    return gameResult;
}

console.log(singleGameRound('rock', getComputerChoice()))