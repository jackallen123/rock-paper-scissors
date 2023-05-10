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
        return 'Draw';
    }

    // win cases
    else if ((a == 'Rock' && computerSelection == 'Scissors') ||
            (a == 'Scissors' && computerSelection == 'Paper') ||
            (a == 'Paper' && computerSelection == 'Rock')) {
                return 'Win';
    }
    
    // if it isn't a draw and you don't win, you must lose
    else {
        return 'Lose';
    }
}

/*
    Plays a 5 round game that keeps score and reports a winner or loser at the end
*/

function game() {
    // variables to keep track of score
    let draws = 0;
    let wins = 0;
    let losses = 0;

    // play the game 5 times
    for (let i = 0; i < 5; i++) {
        // get input from user
        let playerSelection = prompt("Enter rock, paper, or scissors to play the game: \n");

        // generate computer's play
        let computerSelection = getComputerChoice();

        // get result from this round
        let result = playGame(playerSelection, computerSelection);

        // if the game is a draw
        if (result == 'Draw') {
            // print result to console
            console.log("This round is a draw!")
            // increment draw counter
            draws++;
        }

        // if user wins the round
        else if (result == 'Win') {
            // print result to console
            console.log("You win this round!" + playerSelection + " beats " + computerSelection + ".")
            // icrement wins counter
            wins++;
        }

        // if user loses the round
        else {
            // print result to console
            console.log("You lose this round! " + computerSelection + " beats " + playerSelection + ".")
            // increment losses counter
            losses++;
        }

        // at the end of round, print updated score
        console.log("(W/L/D) Current score is: " + wins + " - " + losses + " - " + draws)
    }
}
