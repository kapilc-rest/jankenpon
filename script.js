let humanScore = 0, computerScore = 0;

//let rock = 0, paper = 0, scissors = 0;

function getComputerChoice () {
    let choice = Math.random();
    if (choice <= 1/3){
            choice = "rock";
            rock++;
    } else if (choice <=2/3) {
        choice = "paper";
        paper++;
    } else { 
        choice = "scissors";
        scissors++;
    }
    return choice;
}

/*function getHumanChoice () {
    let a = prompt("Rock, Paper or Scissors").toLowerCase();
    return a;
}*/

function playRound (humanChoice, computerChoice) {
    //humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        result.textContent = "It's a tie!";
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

function playGame(choice) {
        let computerChoice = getComputerChoice();
        let humanChoice = choice;
        console.log(humanChoice)
        playRound(humanChoice, computerChoice);

    if (humanScore == computerScore) {
        result.textContent = "Wow! It's a tie!";
    } else if (humanScore > computerScore) {
        result.textContent = "Yayy! You win!!";
    } else result.textContent = "Computer says: I win. Human.";
}

//playGame();

/*function getComputerBias() {
    rock = 0;
    paper = 0;
    scissors = 0;
    for(let i = 0; i<1000; i++) {
        getComputerChoice();
    }
    //console.log("Rock: " + rock/1000.0 + "%");
    //console.log("Paper: " + paper/1000.0  + "%");
    //console.log("Scissors: "+ scissors/1000.0 + "%" );
    let big = "";
    if (rock >= paper && rock >= scissors) {
        big = "rock";
    } else if (paper >= rock && paper >= scissors) {
        big = "paper";
    } else {
        big = "scissors";
    }
    return big;
}*/

/*function showComputerBias() {
    let rockWinNum = 0, paperWinNum = 0, scissorsWinNum = 0;
    for(let i=0;i<100000;i++) {
        let c = getComputerBias();
        switch(c) {
            case "rock":
                rockWinNum++;
                break;
            case "paper": 
                paperWinNum++;
                break;
            case "scissors":
                scissorsWinNum++;
                break;
        }
    }
    console.log("Total Rock: "+ rockWinNum);
    console.log("Total Paper: " + paperWinNum);
    console.log("Total Scissor: "+ scissorsWinNum);
}*/

//howComputerBias();

//console.log("Your score: " + humanScore);

//console.log("Computer's score: " + computerScore);

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click",() => playGame("rock"));
paperButton.addEventListener("click",playGame);
scissorsButton.addEventListener("click",playGame);

let result = document.querySelector("div.result");

