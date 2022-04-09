const moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    // Randomly returns Rock, Paper or Scissors
    // generate random number from 0 to 2
    // return array[randNumber]
    return moves[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
    return prompt('Rock, Paper, Scissors?').toLowerCase();
}

function playRound(playMove, compMove) {
    if (playMove === compMove) {
        return 'tie';
    }

    // understand who won
    // if (playMove === 'rock') {
    //     if (compMove === 'paper') {
    //         return 'comp';
    //     } else if (compMove === 'scissors') {
    //         return 'user';
    //     }
    // } else if (playMove === 'paper') {
    //     if (compMove === 'scissors') {
    //         return 'comp';
    //     } else if (compMove === 'rock') {
    //         return 'user';
    //     }
    // } else if (playMove === 'scissors') {
    //     if (compMove === 'rock') {
    //         return 'comp';
    //     } else if (compMove === 'paper') {
    //         return 'user';
    //     }
    // }

    // better way to structure who won would be

    if (
        (playMove === 'rock' && compMove === 'scissors') ||
        (playMove === 'paper' && compMove === 'rock') ||
        (playMove === 'scissors' && compMove === 'paper')
    ) {
        // user won
        return 'user';
    } else if (
        (playMove === 'rock' && compMove === 'paper') ||
        (playMove === 'paper' && compMove === 'scissors') ||
        (playMove === 'scissors' && compMove === 'rock')
    ) {
        // user lost
        return 'comp';
    }
}

function game(numRounds) {
    // for loop till number of rounds

    let userPoints = 0;
    let compPoints = 0;

    for (i = 1; i <= numRounds; i++) {
        let playMove = getPlayerSelection();
        let compMove = computerPlay().toLowerCase();

        let result = playRound(playMove, compMove);

        if (result === 'user') {
            console.log(
                `You won game Nr. ${i}! ${playMove} beats ${compMove}!`
            );
            userPoints++;
        } else if (result === 'comp') {
            console.log(
                `Computer won game Nr. ${i}! ${compMove} beats ${playMove}!`
            );
            compPoints++;
        } else if (result === 'tie') {
            console.log(`Game Nr. ${i} was a tie! Nobody gets a point.`);
        }
    }

    if (userPoints > compPoints) {
        console.log('You won the match!');
    } else if (userPoints < compPoints) {
        console.log('Computer won the match!');
    } else if (userPoints === compPoints) {
        console.log("It's a tie");
    }
}
