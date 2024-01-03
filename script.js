"use strict";
//const prompt = require("prompt-sync")({ sigint: true })

const choices = ['Rock', 'Paper', 'Scissors']

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerSelection = document.querySelector('#player-selection')
const computerSelection = document.querySelector('#comp-selection')
const playerScoreDisplay = document.querySelector('#player-score')
const compScoreDisplay = document.querySelector('#comp-score')

let playerChoice = playerSelection.innerText;
let computerChoice = computerSelection.innerText;
let playerScore = playerScoreDisplay.innerText;
let computerScore = compScoreDisplay.innerText;

function getComputerChoice() {
    console.log("computer choice: " + choices[Math.floor(Math.random() * 3)].toLowerCase())
    computerSelection.innerText = choices[Math.floor(Math.random() * 3)].toLowerCase()
}

function userSelection() {
    playerSelection.innerText = this.innerText.toLowerCase();
    console.log("user choice: " + this.innerText);
    return this.innerText;
}

function click() {
    rock.addEventListener(
        'click',
        userSelection
    )
    rock.addEventListener(
        'click',
        getComputerChoice
    )
    rock.addEventListener(
        'click',
        function () {
            singleGameRound(playerSelection.innerText, computerSelection.innerText)
        }
    )
    paper.addEventListener(
        'click',
        userSelection
    )
    paper.addEventListener(
        'click',
        getComputerChoice
    )
    scissors.addEventListener(
        'click',
        userSelection
    )
    scissors.addEventListener(
        'click',
        getComputerChoice
    )
}


function singleGameRound(playerChoice, computerChoice) {
    let gameResult = '';
    let userScore = 0;
    let compScore = 0;
    if (playerChoice == computerChoice) {
        gameResult = 'You tied with Computer.'
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        gameResult = 'You lose. Paper beats rock.'
        compScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        gameResult = 'You win. Rock beats scissors.'
        userScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        gameResult = 'You win. Scissors beat paper.'
        userScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        gameResult = 'You lose. Rock beats scissors.'
        compScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        gameResult = 'You win. Paper beats rock.'
        userScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        gameResult = 'You lose. Scissors beats paper.'
        compScore++;
    }
    playerScore = userScore;
    computerScore = compScore;
    alert(gameResult);
}
click()

// function game() {
//     let round = 1;
//     let w_count = 0;
//     let l_count = 0;
//     while (true) {
//         console.log("Your score: " + w_count)
//         console.log("Computer score: " + l_count)
//         let result = '';
//         result = singleGameRound(choice, getComputerChoice());
//         if (result == 'w') {
//             w_count++;
//             console.log("You win this round.")
//         } else if (result == 'l') {
//             l_count++;
//             console.log("Computer wins this round.")
//         } else if (result == 't') {
//             console.log("It is a tie.")
//         }
//         if (w_count == 3) {
//             console.log("You win the game.")
//             break;
//         } else if (l_count == 3) {
//             console.log("Computer wins the game.");
//             break;
//         }
//         round++;
//     }
// }

//game()


