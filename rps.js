
//console.log(computerPlay);

let playerScore = 0; 
    let computerScore = 0;


let pscoreBoard = document.querySelector('.playerScore')
let cscoreBoard = document.querySelector('.computerScore')
let message = document.querySelector('.message')
let comChoice = document.querySelector('.comChoice')
let finale = document.querySelector('.finale')



function startGame() {
    pscoreBoard.textContent = 0;
    cscoreBoard.textContent = 0;
    rockButton.disabled = false
    paperButton.disabled = false
    scissorsButton.disabled = false;
    playerScore = 0; 
    computerScore = 0;
 message.textContent = ""
 comChoice.textContent = ""
 finale.textContent = ""

}

const starterGame = document.querySelector('#startGame')
starterGame.addEventListener('click', startGame)


//Rock
const rockButton = document.querySelector('#rock');
  
function playRound() {
    const choice = ["rock", "paper", "scissors"];

let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

let computerPlay = randomItem;
    
    
    if(computerPlay == "paper"){message.textContent = "you lose, paper beats rock"; ++computerScore} else if(computerPlay == "rock") {message.textContent = "Tie"}else if(computerPlay == "scissors"){message.textContent = "You win, Rock beats Scissors"; ++playerScore}
 
    pscoreBoard.textContent = playerScore
    cscoreBoard.textContent = computerScore
    console.log(computerPlay)
    comChoice.textContent = computerPlay

    if((cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){rockButton.disabled = true}

    if(( cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){paperButton.disabled = true}
   
    if(( cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){scissorsButton.disabled = true}

    if( computerScore == 5){finale.textContent = "OPPONENT WINS!, try again"} else if(pscoreBoard.textContent == 5){finale.textContent = "YOU WIN"}


}

let playerSelection = rockButton.addEventListener('click', playRound)




//Paper
const paperButton = document.querySelector('#paper');
function playRound2() {
    const choice = ["rock", "paper", "scissors"];

let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

let computerPlay = randomItem;
     
    if(computerPlay == "paper"){message.textContent = "Tie"} else if(computerPlay == "rock") {message.textContent = "You win, Paper beats Rock"; ++playerScore}else if(computerPlay == "scissors"){message.textContent = "You lose, Scissors beats Paper"; ++computerScore}
 
    pscoreBoard.textContent = playerScore
    cscoreBoard.textContent = computerScore
    console.log(computerPlay)
    comChoice.textContent = computerPlay

    if((cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){rockButton.disabled = true}

    if(( cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){paperButton.disabled = true}
   
    if(( cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){scissorsButton.disabled = true}

    if( cscoreBoard.textContent == 5){finale.textContent = "OPPONENT WINS!, try again"} else if(pscoreBoard.textContent == 5){finale.textContent = "YOU WIN"}

}
let playerSelection2 = paperButton.addEventListener('click', playRound2)


//scissors
const scissorsButton = document.querySelector('#scissors');
function playRound3() {
    const choice = ["rock", "paper", "scissors"];

let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

let computerPlay = randomItem;
    

    if(computerPlay == "paper"){message.textContent = "You win, Scissors beats Paper"; ++playerScore} else if(computerPlay == "rock") {message.textContent = "You lose, Rock beats Scissors"; ++computerScore}else if(computerPlay == "scissors"){message.textContent = "Tie"}
    
    pscoreBoard.textContent = playerScore
    cscoreBoard.textContent = computerScore
    console.log(computerPlay)
    comChoice.textContent = computerPlay


   if((cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){rockButton.disabled = true}

    if(( cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){paperButton.disabled = true}
   
    if(( cscoreBoard.textContent >= 5) || ( pscoreBoard.textContent >= 5)){scissorsButton.disabled = true}

    if( cscoreBoard.textContent == 5){finale.textContent = "OPPONENT WINS!, try again"} else if(pscoreBoard.textContent == 5){finale.textContent = "YOU WIN"}
}


let playerSelection3 = scissorsButton.addEventListener('click', playRound3)
