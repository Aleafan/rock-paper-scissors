// Create a global object where properties = selections and values = "weaker" selections
const SELECTION_RIVALS = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
}


// Function that randomly returns "Rock", "Paper" or "Scissors"
function computerPlay() {

    // Generate random integer in range (0-2)
    let randomNum = Math.floor(Math.random() * 3);

    // Associate with each generated number one of three strings and return it
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


// Function that plays a single round
function playRound(playerSelection, computerSelection) {

    // Convert user's selection to lowercase
    playerSelection = playerSelection.toLowerCase();

    // Compare selections and return the result
    if (playerSelection === computerSelection) {
        console.log(`You have a tie! ${playerSelection} vs ${computerSelection}`);
        return 0;
    }
    if (computerSelection === SELECTION_RIVALS[playerSelection]) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
}


// Function that stages 5-round game
function game() {

    console.log('Let\'s start the game!');
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds:
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)

        // Prompt user for selection and validate input
        let playerSelection;
        do {
            playerSelection = prompt('What\'s your selection?').toLowerCase();
        } 
        while (!(playerSelection in SELECTION_RIVALS));

        // Computer makes a selection
        let computerSelection = computerPlay();

        // Play single round (playRound())
        let result = playRound(playerSelection, computerSelection);

        // Log result and current score
        if (result > 0) {
            playerScore++;
        }
        else if (result < 0) {
            computerScore++;
        }
        console.log(`SCORE: Player ${playerScore} - ${computerScore} Computer`);
    }

    // Log the winner based on score
    if (playerScore > computerScore) {
        console.log('Congratulations! You won!');
    }
    else if (playerScore < computerScore) {
        console.log('It\'s not your lucky day... You lost!');
    }
    else {
        console.log('It was a fair game. A tie!');
    }
    return;
}