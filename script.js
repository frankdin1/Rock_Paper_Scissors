"use strict";

const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase()
}

function getYourChoice() {
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
        gameResult = 'You tied with Computer.'
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

    //console.log(gameResult[4])
    return gameResult[4];
}

function game() {
    let round = 1;
    let w_count = 0;
    let l_count = 0;
    while (true) {
        let result = '';
        //console.log("round " + round)
        result = singleGameRound(getYourChoice(), getComputerChoice());
        if (result == 'w') {
            w_count++;
            console.log("You win this round.")
        } else if (result == 'l') {
            l_count++;
            console.log("Computer wins this round.")
        }
        if (w_count == 3) {
            console.log("You win the game.")
            break;
        } else if (l_count == 3) {
            console.log("Computer wins the game.");
            break;
        }
        round++;
    }
}

/*function game() {
    let result = []
    let w_count = 0
    for (let i = 1; i < 6; i++) {
        result.push(singleGameRound(getYourChoice(), getComputerChoice()))
    }
    for (let i = 0; i < 5; i++) {
        console.log(result[i])
        if (result[i] == 'w') {
            w_count++;
        }
    }
    if (w_count >= 3) {
        console.log("You win!")
    } else {
        console.log("The computer wins!")
    }
}*/


//singleGameRound(getComputerChoice(), getComputerChoice())
game()

