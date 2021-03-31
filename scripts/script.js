// Function that randomly returns "Rock", "Paper" or "Scissors"
function computerPlay() {
    // Generate random integer in range (0-2)
    let randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    // Associate with each generated number one of three strings and return it
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }
}