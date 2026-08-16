function getComputerChoice () {
    let choice = Math.random();
    if (choice <= 0.3) {
            choice = "rock";
    } else if (choice <=0.6) {
        choice = "paper";
    } else choice = "scissors";
    return choice;
}

function getHumanChoice () {
    let a = prompt("Rock, Paper or Scissors").toLowerCase();
    return a;
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        alert("It's a tie!");
    } else if (computerChoice == "rock") {
        switch(humanChoice) {
            case "paper":
                win(humanChoice, computerChoice);
                break;
            case "scissors":
                lose(computerChoice, humanChoice);
                break;
        }
    } else if (computerChoice == "paper") {
        switch(humanChoice) {
            case "scissors":
                win(humanChoice, computerChoice);
                break;
            case "rock":
                lose(computerChoice,humanChoice);
                break;
        }
    } else {
        switch(humanChoice) {
            case "rock":
                win(humanChoice,computerChoice);
                break;
            case "paper":
                lose(computerChoice, humanChoice);
                break;
        }
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

function playGame() {
    let humanScore = 0, computerScore = 0;
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice ();

}

playRound(humanChoice,computerChoice);

console.log(humanScore);
console.log(computerScore);