"use strict";
//const prompt = require("prompt-sync")({ sigint: true })

const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase()
}

// function yourChoice() {
//     let userChoice = parseInt(prompt("Choose your hand: 1-Rock, 2-Paper, 3-Scissors"))
//     console.log(userChoice)
//     if (userChoice < 1 || userChoice > 3) {
//         console.log('Please enter a valid option.')
//         return
//     } else if (userChoice == 1) {
//         return 'rock'
//     } else if (userChoice == 2) {
//         return 'paper'
//     } else if (userChoice == 3) {
//         return 'scissors'
//     }
// }

//create an event listener that displays the user's choice on screen
const rock = document.querySelector('#rock');
const playerSelection = document.querySelector('#player-selection')

function displayUserSelection() {
    playerSelection.innerText = this.innerText;
}

rock.addEventListener(
    'click',
    displayUserSelection
)

paper.addEventListener(
    'click',
    displayUserSelection
)

scissors.addEventListener(
    'click',
    displayUserSelection
)

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
    return gameResult[4];
}

function game() {
    let round = 1;
    let w_count = 0;
    let l_count = 0;
    while (true) {
        console.log("Your score: " + w_count)
        console.log("Computer score: " + l_count)
        let result = '';
        result = singleGameRound(yourChoice(), getComputerChoice());
        if (result == 'w') {
            w_count++;
            console.log("You win this round.")
        } else if (result == 'l') {
            l_count++;
            console.log("Computer wins this round.")
        } else if (result == 't') {
            console.log("It is a tie.")
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

game()

