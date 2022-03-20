let games = 0;
let wins = 0;

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
    games += 1;
    if (outcome == "win") {
        wins += 1;
    }

    document.querySelector('.stats').style.display = "block";
    document.querySelector('.games-played-count').innerHTML = games;

    document.querySelector('.wins-percentage').innerHTML = Math.floor((wins / games) * 100) + "%";

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