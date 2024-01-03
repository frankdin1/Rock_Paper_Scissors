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
let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    computerSelection.innerText = choices[Math.floor(Math.random() * 3)].toLowerCase()
}

function userSelection() {
    playerSelection.innerText = this.innerText.toLowerCase();
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
    paper.addEventListener(
        'click',
        function () {
            singleGameRound(playerSelection.innerText, computerSelection.innerText)
        }
    )
    scissors.addEventListener(
        'click',
        userSelection
    )
    scissors.addEventListener(
        'click',
        getComputerChoice
    )
    scissors.addEventListener(
        'click',
        function () {
            singleGameRound(playerSelection.innerText, computerSelection.innerText)
        }
    )
}


function singleGameRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        compScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        userScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        userScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        compScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        userScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        compScore++;
    }

    playerScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;

    if (playerScoreDisplay.innerText == 5) {
        alert("YOU WIN!!!")
        playerScoreDisplay.innerText = 0;
        compScoreDisplay.innerText = 0;
        userScore = 0;
        compScore = 0;
    } else if (compScoreDisplay.innerText == 5) {
        alert("YOU LOSE!!!")
        playerScoreDisplay.innerText = 0;
        compScoreDisplay.innerText = 0;
        userScore = 0;
        compScore = 0;
    }
}

click()