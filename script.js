let humanScore = 0, computerScore = 0;

let rock = 0, paper = 0, scissors = 0;

function getComputerChoice () {
    let choice = Math.random();
    if (choice <= 0.33) {
            choice = "rock";
            rock++;
    } else if (choice <=0.66) {
        choice = "paper";
        paper++;
    } else { 
        choice = "scissors";
        scissors++;
    }
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
    for(let i = 1; i<=5;i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice ();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore == computerScore) {
        console.log("Wow! It's a tie!");
    } else if (humanScore > computerScore) {
        console.log("Yayy! You win!!");
    } else console.log("Computer says: I win. Human.");

}

// playGame();

function getComputerBias() {
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
}

function showComputerBias() {
    let rockWinNum = 0, paperWinNum = 0, scissorsWinNum = 0;
    for(let i=0;i<1000;i++) {
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
    console.log("Total Rock win: "+ rockWinNum);
    console.log("Total Paper win: " + paperWinNum);
    console.log("Total Scissors win: "+ scissorsWinNum);
}

showComputerBias();

//console.log("Your score: " + humanScore);
//console.log("Computer's score: " + computerScore);