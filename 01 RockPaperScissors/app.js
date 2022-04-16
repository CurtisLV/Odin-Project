const moves = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('button');
const resultNum = document.querySelector('#resultNum');
const resultText = document.querySelector('#resultText');
let i = 0;

let userPoints = 0;
let compPoints = 0;
const maxPoints = 5;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (userPoints === maxPoints || compPoints === maxPoints) return;
        game(button.value);
    });
});

function computerPlay() {
    // Randomly returns Rock, Paper or Scissors
    // generate random number from 0 to 2
    // return array[randNumber]
    return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerMove, compMove) {
    if (playerMove === compMove) {
        return 'tie';
    }

    if (
        (playerMove === 'rock' && compMove === 'scissors') ||
        (playerMove === 'paper' && compMove === 'rock') ||
        (playerMove === 'scissors' && compMove === 'paper')
    ) {
        // user won
        return 'user';
    } else if (
        (playerMove === 'rock' && compMove === 'paper') ||
        (playerMove === 'paper' && compMove === 'scissors') ||
        (playerMove === 'scissors' && compMove === 'rock')
    ) {
        // user lost
        return 'comp';
    }
}

function game(playerMove) {
    let compMove = computerPlay().toLowerCase();
    let result = playRound(playerMove, compMove);
    i++;

    if (result === 'user') {
        userPoints++;
        resultNum.innerText = `User ${userPoints} : ${compPoints} Computer`;
        resultText.innerText = `You won game Nr. ${i}! ${playerMove} beats ${compMove}!`;
    } else if (result === 'comp') {
        compPoints++;
        resultNum.innerText = `User ${userPoints} : ${compPoints} Computer`;
        resultText.innerText = `Computer won game Nr. ${i}! ${compMove} beats ${playerMove}!`;
    } else if (result === 'tie') {
        resultNum.innerText = `User ${userPoints} : ${compPoints} Computer`;
        resultText.innerText = `Game Nr. ${i} was a tie! Nobody gets a point.`;
    }

    if (userPoints === maxPoints) {
        resultText.innerText = resultText.innerText + '\n You won the match!';
    } else if (compPoints === maxPoints) {
        resultText.innerText =
            resultText.innerText + '\n Computer won the match!';
    }
}

// function game(playerMove) {
//     // for loop till number of rounds

//     const numRounds = document.querySelector('#times').value;
//     let userPoints = 0;
//     let compPoints = 0;

//     for (i = 1; i <= numRounds; i++) {
//         let compMove = computerPlay().toLowerCase();

//         let result = playRound(playerMove, compMove);

//         if (result === 'user') {
//             console.log(
//                 `You won game Nr. ${i}! ${playerMove} beats ${compMove}!`
//             );
//             userPoints++;
//         } else if (result === 'comp') {
//             console.log(
//                 `Computer won game Nr. ${i}! ${compMove} beats ${playerMove}!`
//             );
//             compPoints++;
//         } else if (result === 'tie') {
//             console.log(`Game Nr. ${i} was a tie! Nobody gets a point.`);
//         }
//     }

//     if (userPoints > compPoints) {
//         console.log('You won the match!');
//     } else if (userPoints < compPoints) {
//         console.log('Computer won the match!');
//     } else if (userPoints === compPoints) {
//         console.log("It's a tie");
//     }
// }
