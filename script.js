// Rock, Paper, Scissors game built while working through the Odin Project 6/20/2022

let userScore = 0
let computerScore = 0
let roundCount = 1

//Handles the computer's play by converting random number 0-2 to Rock, Paper, or Scissors
function computerPlay() {
    let compSelection = Math.floor(Math.random() * 3)
    if (compSelection == 0) {
        return "ROCK"
    } else if (compSelection == 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

//Get user's selection for the game
function getPlayerSelection() {
    return window.prompt('Please Enter "Rock", "Paper", or "Scissors"').toUpperCase()
}

function playRound() {
    const playerSelection = getPlayerSelection()
    console.log("You chose: " + playerSelection)
    const computerSelection = computerPlay()
    console.log("The Computer chose: " + computerSelection)
// Get all winning possibilities. If not, then lose round
    if (playerSelection == computerSelection) {
        console.log("Round " + roundCount + " is a Tie")
        roundCount++
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("You Win Round " + roundCount)
        roundCount++
        userScore++
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("You Win Round " + roundCount)
        roundCount++
        userScore++
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("You Win Round " + roundCount)
        roundCount++
        userScore++
    } else {
        console.log("You Lose Round " + roundCount)
        roundCount++
        computerScore++
    }
}

function game() {
    while (roundCount <= 5) {
        playRound()
    }
    console.log("Final Score: ")
    console.log("Your score: " + userScore)
    console.log("Computer score: " + computerScore)
    if (userScore > computerScore) {
        console.log("You are the Rock, Paper, Scissors Champion of the world!")
    } else if (userScore == computerScore) {
        console.log("You tied with the computer")
    } else {
        console.log("You lost to the computer!")
    }
}

game()