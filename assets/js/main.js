let games = 0;
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function play(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")) {
        outcomeReaction("lose", "red", computerSelection);
    } else if ((computerSelection === "scissors" && playerSelection === "rock") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "rock" && playerSelection === "paper")) {
        outcomeReaction("win", "green", computerSelection);
    } else {
        outcomeReaction("tied", "yellow", computerSelection);
    }
}

function outcomeReaction(outcome, outcomeColor, computerSelection) {
    if (playerWins < 5 || computerWins < 5) document.querySelector('.win-or-lose-overall').style.display = "none";
    games += 1;
    if (outcome == "win") {
        playerWins += 1;
    } else if (outcome == "lose") {
        computerWins += 1;
    }

    document.querySelector('.stats').style.display = "block";
    document.querySelector('.games-played-count').innerHTML = games;

    document.querySelector('.wins-percentage').innerHTML = Math.floor((playerWins / games) * 100) + "%";

    if (playerWins == 5) {
        playerWins = 0;
        computerWins = 0;
        document.querySelector('.win-or-lose-overall').style.backgroundColor = "gold";
        document.querySelector('.win-or-lose-overall').style.display = "block";
        document.querySelector('.win-or-lose-overall p').innerText = `You've won 5 games total. You Win!`;
    } else if (computerWins == 5) {
        playerWins = 0;
        computerWins = 0;
        document.querySelector('.win-or-lose-overall').style.backgroundColor = "red";
        document.querySelector('.win-or-lose-overall').style.display = "block";
        document.querySelector('.win-or-lose-overall p').innerText = `The computer won 5 games total. You lose!`

    }
    document.querySelector('.win-or-lose').style.backgroundColor = outcomeColor;
    document.querySelector('.win-or-lose').style.display = "block";
    document.querySelector('.win-or-lose p').innerHTML = `The computer played ${computerSelection}. You ${outcome}!`;

}
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(button.className.split(' ')[1]);

        play(button.className.split(' ')[1], computerPlay())
    })
})