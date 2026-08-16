console.log("Hello world");

function getComputerChoice () {
    return Math.random();
}

let computerChoice = getComputerChoice ();

if (computerChoice <= 0.3) {
    computerChoice = "rock";
} else if (computerChoice <=0.6) {
    computerChoice = "paper";
} else computerChoice = "scissors";

console.log(computerChoice);

function getHumanChoice () {
    let a = prompt("Rock, Paper or Scissors");
    return a;
}

let humanChoice = getHumanChoice ();

console.log(humanChoice);

let humanScore = 0, computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice=humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        alert("It's a tie!");
    } else if (computerChoice = "rock")
        switch(humanChoice) {
            case "paper":
                win(humanChoice, computerChoice);
                break;
            case "scissors":
                lose(computerChoice, humanChoice);
                break;
        }
}

function win(humanChoice,computerChoice) {
    alert(`You win! ${humanChoice} beats ${computerChoice}`)
    humanScore++;
}

function lose(computerChoice, humanChoice) {
    alert(`You lose! ${computerChoice} beats ${humanChoice}`)
    computerScore++;
}

playRound(humanChoice,computerChoice);