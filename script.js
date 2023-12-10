"use strict";

const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase()
}

function yourChoice() {
    let userChoice = parseInt(prompt("Choose your hand: 1-Rock, 2-Paper, 3-Scissors"))
    while (userChoice < 1 || userChoice > 3) {
        console.log('Please enter a valid option.')
        yourChoice();
    }
    if (userChoice == 1) {
        return 'rock'
    } else if (userChoice == 2) {
        return 'paper'
    } else if (userChoice == 3) {
        return 'scissors'
    }
}
//console.log(getComputerChoice());

function singleGameRound(playerChoice, computerChoice) {
    let gameResult = '';
    if (playerChoice == computerChoice) {
        gameResult = "It's a tie."
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
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
    console.log(gameResult)
    return gameResult;
}


singleGameRound(getComputerChoice(), getComputerChoice())