//Rock, Paper, Scissors Game
const choices = ["rock", "paper", "scissors"];
let round = 0;
let computerPoints = 0;
let playerPoints = 0;

// Allow the computer to choose rock, paper or scissors
function getComputerChoice (){

    let computerChoice = choices[Math.floor((Math.random() * 3) + 1) - 1];
    return computerChoice;
}

//Check player selection
function checkPlayerSelection (){
    let player1 = prompt("Choose: rock, paper, or scissors").toLowerCase();
    
    if (player1 === "rock"){
        return player1;

    } else if (player1 === "paper"){
        return player1;

    } else if (player1 === "scissors"){
        return player1;

    } else return checkPlayerSelection();
        
}

//Game logic
function playRound (playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return alert(`ROUND: ${round}, It's a Draw!`);

    } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerPoints++;
        return alert(`ROUND: ${round}, You lose, ${computerSelection} beats ${playerSelection}!`);

    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerPoints++;
        return alert(`ROUND: ${round}, You lose, ${computerSelection} beats ${playerSelection}!`);

    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerPoints++;
        return alert(`ROUND: ${round}, You lose, ${computerSelection} beats ${playerSelection}!`);

    } else {
        playerPoints++;
        return alert(`ROUND: ${round}, You Win!!! ${playerSelection} beats ${computerSelection}`)
    }
}

//Game play (Allow the game to play a number of rounds)
function game (){
    let rounds = prompt("Let's play Rock, Paper, Scissors. How many rounds should we play?");
    playerPoints = 0;
    computerPoints = 0;

    for(round = 1; round <= rounds; round++){
        playRound(checkPlayerSelection(), getComputerChoice())
    }

    if (computerPoints == playerPoints){
        return alert(`IT'S A DRAW. Player 1 score: ${playerPoints} || Computer score: ${computerPoints}`);

    } else if (computerPoints > playerPoints){
        return alert(`You lose. Computer score: ${computerPoints} || Player 1 score: ${playerPoints}`);

    }else {
        return alert(`You Win!!! Player 1 score: ${playerPoints} || Computer score: ${computerPoints}`);
    }

}

