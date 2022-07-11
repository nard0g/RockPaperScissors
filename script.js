// Rock, Paper, Scissors game built while working through the Odin Project 6/20/2022

let userScore = 0;
let computerScore = 0;
const userScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const scoreUpdate = document.querySelector('.scores');
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-button");
const gameEndMessage = document.querySelector(".gameEndMessage");

const rockIcon = `<svg viewBox="24 32 208 200" id="Flat" xmlns="http://www.w3.org/2000/svg">
<path d="M200,80H184V64a31.97943,31.97943,0,0,0-56-21.13208A31.97443,31.97443,0,0,0,72.20508,60.4231,31.978,31.978,0,0,0,24,88v40a104,104,0,0,0,208,0V112A32.03635,32.03635,0,0,0,200,80ZM152,48a16.01833,16.01833,0,0,1,16,16V80H136V64A16.01833,16.01833,0,0,1,152,48ZM88,64a16,16,0,0,1,32,0v40a16,16,0,0,1-32,0V64ZM40,88a16,16,0,0,1,32,0v16a16,16,0,0,1-32,0Zm88,128a88.10627,88.10627,0,0,1-87.9209-84.249A31.94065,31.94065,0,0,0,80,125.13208a31.92587,31.92587,0,0,0,44.58057,3.34595,32.23527,32.23527,0,0,0,11.79443,11.4414A47.906,47.906,0,0,0,120,176a8,8,0,0,0,16,0,32.03635,32.03635,0,0,1,32-32,8,8,0,0,0,0-16H152a16.01833,16.01833,0,0,1-16-16V96h64a16.01833,16.01833,0,0,1,16,16v16A88.09957,88.09957,0,0,1,128,216Z"/></svg>`;

const paperIcon = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.582 487.582" style="enable-background:new 0 0 487.582 487.582;" xml:space="preserve"><path d="M472.936,200.703c-5.177-5.177-11.293-9.069-17.959-11.538c13.349-19.462,11.398-46.338-5.88-63.617c-5.425-5.425-11.799-9.336-18.592-11.742c4.674-7.716,7.175-16.583,7.175-25.836c0-13.356-5.201-25.912-14.646-35.355c-9.443-9.444-21.999-14.645-35.355-14.645c-9.253,0-18.12,2.501-25.836,7.175c-2.406-6.792-6.316-13.167-11.741-18.592c-19.496-19.494-51.217-19.495-70.711,0l-86.405,86.405c-2.481-6.326-6.251-12.135-11.2-17.084c-9.444-9.444-22-14.645-35.355-14.645s-25.912,5.201-35.355,14.645L38.369,168.58C13.626,193.323,0,226.22,0,261.211s13.626,67.888,38.369,92.631l83.438,83.438c24.742,24.743,57.639,38.37,92.63,38.37s67.889-13.626,92.631-38.37l165.867-165.866c9.444-9.444,14.646-22,14.646-35.356C487.582,222.703,482.38,210.147,472.936,200.703z M451.723,250.201L285.856,416.067c-19.076,19.077-44.44,29.583-71.418,29.583c-26.978,0-52.341-10.506-71.417-29.583l-83.438-83.438c-39.38-39.38-39.38-103.456,0-142.836l72.707-72.706c3.777-3.777,8.799-5.858,14.142-5.858s10.364,2.081,14.142,5.858c3.777,3.777,5.858,8.799,5.858,14.142s-2.081,10.364-5.858,14.142c0,0-56.568,56.569-56.568,56.569l21.213,21.213L300.604,47.766c7.798-7.798,20.487-7.798,28.285,0s7.798,20.486,0,28.285L217.141,187.798l21.213,21.213L373.538,73.828c3.777-3.777,8.8-5.858,14.142-5.858c5.343,0,10.365,2.081,14.143,5.858c3.777,3.777,5.858,8.8,5.858,14.142c0,5.342-2.081,10.364-5.858,14.142l-23.426,23.426c-0.01,0.01-111.758,111.758-111.758,111.758l21.213,21.213l111.748-111.748c7.798-7.798,20.487-7.798,28.285,0s7.798,20.487,0,28.285l-25.65,25.65c-0.008,0.008-86.098,86.097-86.098,86.097l21.213,21.213l86.094-86.094c3.777-3.775,8.798-5.854,14.138-5.854c5.343,0,10.365,2.081,14.143,5.858c3.777,3.777,5.858,8.8,5.858,14.142C457.582,241.4,455.5,246.423,451.723,250.201z"/></svg>`;

const scissorsIcon = `<svg viewBox="2 7 28 20" xmlns="http://www.w3.org/2000/svg"><path d="M 11.40625 6.96875 C 10.578125 6.953125 9.890625 7.125 9.46875 7.25 C 9.457031 7.25 9.449219 7.25 9.4375 7.25 L 6.9375 8.03125 C 4.003906 8.933594 2 11.652344 2 14.71875 L 2 20 C 2 23.855469 5.144531 27 9 27 L 18.90625 27 C 20.125 27.027344 21.304688 26.3125 21.78125 25.125 C 22.082031 24.371094 22.039063 23.578125 21.75 22.875 C 22.363281 22.550781 22.882813 22.027344 23.15625 21.34375 C 23.46875 20.558594 23.417969 19.722656 23.09375 19 L 27 19 C 28.644531 19 30 17.644531 30 16 C 30 14.355469 28.644531 13 27 13 L 25.46875 13 L 25.875 12.875 C 27.449219 12.398438 28.351563 10.699219 27.875 9.125 C 27.398438 7.550781 25.699219 6.648438 24.125 7.125 L 15.6875 9.71875 C 15.613281 9.53125 15.527344 9.328125 15.40625 9.125 C 14.90625 8.289063 13.894531 7.34375 12.28125 7.0625 C 11.980469 7.011719 11.683594 6.972656 11.40625 6.96875 Z M 25.125 9 C 25.515625 9.042969 25.847656 9.3125 25.96875 9.71875 C 26.132813 10.257813 25.820313 10.804688 25.28125 10.96875 L 18.4375 13.03125 L 18.78125 14.15625 L 18.78125 15 L 27 15 C 27.566406 15 28 15.433594 28 16 C 28 16.566406 27.566406 17 27 17 L 20.40625 17 L 17.78125 15.96875 C 17.402344 15.816406 17.011719 15.742188 16.625 15.75 L 16.09375 11.65625 L 24.71875 9.03125 C 24.855469 8.988281 24.996094 8.984375 25.125 9 Z M 11.375 9.03125 C 11.566406 9.03125 11.765625 9.03125 11.9375 9.0625 C 13.011719 9.25 13.425781 9.71875 13.6875 10.15625 C 13.949219 10.59375 13.96875 10.90625 13.96875 10.90625 C 13.96875 10.925781 13.96875 10.949219 13.96875 10.96875 L 14.8125 17.40625 C 14.820313 17.4375 14.832031 17.46875 14.84375 17.5 C 14.96875 18.027344 14.652344 18.53125 14.125 18.65625 C 13.800781 18.734375 13.636719 18.691406 13.46875 18.59375 C 13.300781 18.496094 13.09375 18.289063 12.9375 17.84375 L 11.6875 13 C 11.609375 12.703125 11.398438 12.460938 11.121094 12.339844 C 10.839844 12.21875 10.519531 12.230469 10.25 12.375 L 8.59375 13.28125 C 8.109375 13.546875 7.933594 14.15625 8.203125 14.640625 C 8.46875 15.125 9.078125 15.300781 9.5625 15.03125 L 10.0625 14.75 L 11.03125 18.4375 C 11.039063 18.46875 11.050781 18.5 11.0625 18.53125 C 11.332031 19.304688 11.792969 19.925781 12.4375 20.3125 C 12.964844 20.628906 13.578125 20.75 14.1875 20.6875 C 13.871094 20.980469 13.609375 21.355469 13.4375 21.78125 C 12.980469 22.925781 13.269531 24.183594 14.09375 25 L 9 25 C 6.226563 25 4 22.773438 4 20 L 4 14.71875 C 4 12.519531 5.429688 10.585938 7.53125 9.9375 L 10.03125 9.1875 C 10.234375 9.125 10.804688 9.03125 11.375 9.03125 Z M 16.8125 17.78125 C 16.886719 17.792969 16.957031 17.78125 17.03125 17.8125 L 20.75 19.3125 C 21.273438 19.523438 21.523438 20.070313 21.3125 20.59375 C 21.101563 21.117188 20.523438 21.367188 20 21.15625 L 16.28125 19.6875 C 16.226563 19.667969 16.203125 19.621094 16.15625 19.59375 C 16.550781 19.085938 16.804688 18.445313 16.8125 17.78125 Z M 16.1875 21.90625 C 16.320313 21.90625 16.460938 21.917969 16.59375 21.96875 L 17.9375 22.5 L 19.25 23.03125 L 19.375 23.0625 C 19.898438 23.273438 20.148438 23.851563 19.9375 24.375 C 19.785156 24.757813 19.445313 24.980469 19.0625 25 C 19.050781 25 19.042969 25 19.03125 25 C 18.898438 25.003906 18.757813 24.988281 18.625 24.9375 L 15.84375 23.8125 C 15.320313 23.601563 15.070313 23.023438 15.28125 22.5 C 15.386719 22.238281 15.578125 22.070313 15.8125 21.96875 C 15.929688 21.917969 16.054688 21.90625 16.1875 21.90625 Z"/></svg>`;


const selectRock = document.querySelector('.selectRock');
const selectPaper = document.querySelector('.selectPaper');
const selectScissors = document.querySelector('.selectScissors');
const playerChoiceResult = document.querySelector('.playerChoiceResult');
const computerChoiceResult = document.querySelector('.computerChoiceResult');
const messages = document.querySelector('.messages');

let playerSelection;


// Wait for player to make selection. Then update choice and plays round
selectRock.addEventListener('click', () => {
    playerChoiceResult.innerHTML = rockIcon;
    playerSelection = 'ROCK';
    playRound();
});

selectPaper.addEventListener('click', () => {
    playerChoiceResult.innerHTML = paperIcon;
    playerSelection = 'PAPER';
    playRound();
});

selectScissors.addEventListener('click', () => {
    playerChoiceResult.innerHTML = scissorsIcon;
    playerSelection = 'SCISSORS';
    playRound();
});



//Handles the computer's play by converting random number 0-2 to Rock, Paper, or Scissors
function computerPlay() {
    let compSelection = Math.floor(Math.random() * 3);
    if (compSelection == 0) {
        computerChoiceResult.innerHTML = rockIcon;
        return "ROCK";
    } else if (compSelection == 1) {
        computerChoiceResult.innerHTML = paperIcon;
        return "PAPER";
    } else {
        computerChoiceResult.innerHTML = scissorsIcon;
        return "SCISSORS";
    }
};

function updateScore() {
    userScoreDisplay.innerText = userScore.toString();
    computerScoreDisplay.innerText = computerScore.toString();
    endGameCheck()
}

function playRound() {
    const computerSelection = computerPlay();


// Get all winning possibilities. If not, then lose round
    if (playerSelection == computerSelection) {
        messages.innerHTML = '<h3>Round is a Tie</h3>';
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        messages.innerHTML = '<h3>You Win Round</h3>';
        userScore++;
        updateScore()
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        messages.innerHTML = '<h3>You Win Round</h3>';
        userScore++;
        updateScore()
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        messages.innerHTML = '<h3>You Win Round</h3>';
        userScore++;
        updateScore()
    } else {
        messages.innerHTML = '<h3>You Lose Round</h3>';
        computerScore++;
        updateScore()
    }
};

function endGameCheck() {
    if (userScore >= 5 || computerScore >= 5) {
        modal.showModal();
        if (userScore >= 5) {
            gameEndMessage.innerText = "User Won!"
        } else if (computerScore >= 5) {
            gameEndMessage.innerText = "Computer Won!"
        } else {
            gameEndMessage.innerText = "I don't know how you got here!"
        }
    }

};


closeModal.addEventListener('click', () => {
    modal.close();
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerText = userScore.toString();
    computerScoreDisplay.innerText = computerScore.toString();
})