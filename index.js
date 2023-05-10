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

}

/*
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection))
*/