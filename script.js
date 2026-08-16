console.log("Hello world");

function getComputerChoice () {
    return Math.random();
}

let computerChoice = getComputerChoice ();

if (computerChoice <= 0.3) {
    computerChoice = "Rock";
} else if (computerChoice <=0.6) {
    computerChoice = "Paper";
} else computerChoice = "Scissors";

console.log(computerChoice);

function getHumanChoice () {
    let a = prompt("Rock, Paper or Scissors");
    return a;
}

let humanChoice = getHumanChoice ();

console.log(humanChoice);