/*
    Function that randomly returns either ('Rock', 'Paper', or 'Scissors')
    Used to make the computer's play

*/
function getComputerChoice() {
    // generate random number from 0 to 2
    let r = Math.floor(Math.random() * 3)

    if (r == 0) {
        return 'Rock'
    }

    else if (r == 1) {
        return 'Paper'
    }

    else {
        return 'Scissors'
    }
}

/*
    Plays a single round of RPS
    Returns a str that declares winner of the round
*/
function playGame(playerSelection, computerSelection) {
    // make parameters case-insensitive
    let a = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    // draw cases
    if (a == computerSelection) {
        return 'The game is a draw!';
    }

    // win cases
    else if ((a == 'Rock' && computerSelection == 'Scissors') ||
            (a == 'Scissors' && computerSelection == 'Paper') ||
            (a == 'Paper' && computerSelection == 'Rock')) {
                return ('You win! ' + a + ' beats ' + computerSelection + '.');
    }
    
    // if it isn't a draw and you don't win, you must lose
    else {
        return ('You lose! ' + computerSelection + ' beats ' + a + '.');
    }
}

// get user input
let playerSelection = prompt("Enter Rock, Paper or Scissors: \n");
// generate computer choice
let computerSelection = getComputerChoice();

// print results
console.log(playGame(playerSelection, computerSelection))
