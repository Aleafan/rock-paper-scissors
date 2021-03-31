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
        return 'You have a tie!'
    }
    // Create an object where properties = selections and values = "weaker" selections
    const selectionBeat = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    }
    if (computerSelection === selectionBeat[playerSelection]) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}