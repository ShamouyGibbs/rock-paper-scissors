//Constants/Variables
const msg1 = document.querySelector(".msg");
const playerCard = document.querySelector(".player-choice");
const compCard = document.querySelector(".computer-choice");
const playerScore = document.querySelector(".player__score");
const compScore = document.querySelector(".computer__score");
const playBtn = document.querySelectorAll(".play__btn");
const resetGame = document.querySelector(".reset_game");

//Rock, Paper, Scissors Game
let rounds = 1;
let computerPoints = 0;
let playerPoints = 0;
let playerChoice;

//EVENT LISTENER
playBtn.forEach(item => {
    item.addEventListener('click', event => {

       playerChoice = event.target.innerText.toLowerCase();
       game();

    })
})

resetGame.addEventListener('click', event => {
    rounds = 1;
    computerPoints = 0;
    playerPoints = 0;
    playerScore.innerText = playerPoints;
    compScore.innerText = computerPoints;
    msg1.innerText = "Lets play again. Rock, paper, scissors?"
    resetGame.innerText = "";
})


// Allow the computer to choose rock, paper or scissors
function getComputerChoice (){

    let computerChoice = playBtn[Math.floor((Math.random() * 3) + 1) - 1].innerText.toLowerCase();
    if (computerChoice === "rock"){
        compCard.src = "./Assets/rock.png";
        return computerChoice;
    } else if (computerChoice === "paper"){
        compCard.src = "./Assets/paper.png";
        return computerChoice;
    } else {
        compCard.src = "./Assets/scissors.png";
        return computerChoice;
    }
}

//Check player selection
function getPlayerChoice (choice){

    if (choice === "rock"){
        playerCard.src = "./Assets/rock.png";
        return choice;

    } else if (choice === "paper"){
        playerCard.src = "./Assets/paper.png";
        return choice;

    } else {
        playerCard.src = "./Assets/scissors.png"
        return choice;
    }
        
}

//Game logic
function playRound (playerSelection, computerSelection){

        if(playerSelection === computerSelection){
            msg1.innerText = `ROUND: ${rounds++}, It's a Draw!`;

        } else if (playerSelection === "rock" && computerSelection === "paper"){
            msg1.innerText = `ROUND: ${rounds++}, You lose, ${computerSelection} beats ${playerSelection}!`;
            computerPoints++;

        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            msg1.innerText = `ROUND: ${rounds++}, You lose, ${computerSelection} beats ${playerSelection}!`;
            computerPoints++;

        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            msg1.innerText = `ROUND: ${rounds++}, You lose, ${computerSelection} beats ${playerSelection}!`;
            computerPoints++;

        } else {
            msg1.innerText = `ROUND: ${rounds++}, You Win!!! ${playerSelection} beats ${computerSelection}`;
            playerPoints++;
        }

            // GAME SCORE
            playerScore.innerText = playerPoints;
            compScore.innerText = computerPoints;
    }

//Game play (Allow the game to play a number of rounds)
function game (){

    if (rounds < 5){
        playRound(getPlayerChoice(playerChoice), getComputerChoice());

    } else if (rounds >= 5){
        if (computerPoints == playerPoints){
            resetGame.innerText = "Play again?";
            return msg1.innerText = `IT'S A DRAW. Your score: ${playerPoints} || Computer score: ${computerPoints}`;
    
        } else if (computerPoints > playerPoints){
            resetGame.innerText = "Play again?";
            return msg1.innerText = `You lose. Computer score: ${computerPoints} || Your score: ${playerPoints}`;
    
        }else {
            resetGame.innerText = "Play again?";
            return msg1.innerText = `You Win!!! Your score: ${playerPoints} || Computer score: ${computerPoints}`;
        }
    }

}

