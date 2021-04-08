// Create global object where properties = selections and values = "weaker" selections
const SELECTION_RIVALS = {
    'Rock': 'Scissors',
    'Scissors': 'Paper',
    'Paper': 'Rock'
}

// Initialize global variables
let playerScore = 0;
let computerScore = 0;
let roundResult = document.querySelector('#round-result');
let score = document.querySelector('#score');
let winner = document.querySelector('#winner');
let newGameBtn = document.querySelector('#new-game-btn');


// Function simulating random computer selection
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}


// Function playing single round and logging the results
function playRound(event) {
    if (playerScore >= 5 || computerScore >= 5) return;

    let playerSelection = event.target.textContent;
    let computerSelection = computerPlay();

    if (!(playerSelection in SELECTION_RIVALS)) {
        roundResult.textContent = `Please select valid input!`;
        return
    }
    if (playerSelection === computerSelection) {
        roundResult.textContent = `You have a tie! ${playerSelection} vs ${computerSelection}.`;
    }
    else if (computerSelection === SELECTION_RIVALS[playerSelection]) {
        playerScore++;
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        computerScore++;
        roundResult.textContent = `You lose! ${playerSelection} loses to ${computerSelection}.`;
    }
    score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    
    if (playerScore >= 5) {
        winner.textContent = `Congratulations! You won the game!`;
        newGameBtn.classList.remove('hidden');
    }
    if (computerScore >= 5) {
        winner.textContent = `Game over! Computer kicked your ass!`;
        newGameBtn.classList.remove('hidden');
    }
}


// Function resetting game parameters before new game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = `Let's play! Who gets 5 points first wins!`;
    score.textContent = `Player 0 : 0 Computer`;
    winner.textContent = '';
    this.classList.add('hidden');
}


let buttons = document.querySelectorAll('.selection');
buttons.forEach(button => button.addEventListener('click', playRound));

newGameBtn.addEventListener('click', resetGame);