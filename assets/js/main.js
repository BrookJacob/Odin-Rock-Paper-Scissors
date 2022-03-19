function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function play(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")) {
        document.querySelector('.win-or-lose').style.backgroundColor = "red";
        document.querySelector('.win-or-lose').style.display = "block";
        document.querySelector('.win-or-lose p').innerHTML = `The computer played ${computerSelection}. You lose!`
            //console.log(`The computer played ${computerSelection}. You lose!`)
    } else if ((computerSelection === "scissors" && playerSelection === "rock") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "rock" && playerSelection === "paper")) {
        document.querySelector('.win-or-lose').style.backgroundColor = "green";
        document.querySelector('.win-or-lose').style.display = "block";
        document.querySelector('.win-or-lose p').innerHTML = `The computer played ${computerSelection}. You win!`
            //console.log(`The computer played ${computerSelection}. You win!`)
    } else {
        document.querySelector('.win-or-lose').style.backgroundColor = "yellow";
        document.querySelector('.win-or-lose').style.display = "block";
        document.querySelector('.win-or-lose p').innerHTML = `The computer played ${computerSelection}. It's a draw!`
        console.log(`The computer played ${computerSelection}. It's a draw!`)
    }
}
const button = document.querySelector('.input-and-button input[type="button"]');
button.addEventListener('click', function() {
    let inputText = document.querySelector('.input-and-button input[type="text"]').value.toLowerCase();
    console.log(inputText)
    play(inputText, computerPlay())
})