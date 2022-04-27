const choice = ["rock", "paper", "scissors"];

let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

let computerPlay = randomItem;
    
console.log(computerPlay);

let playerScore = 0; 
let computerScore = 0;



for (let i = 0; i < 5; i++){
let playerSelection = prompt("rock, paper, scissors");



let playerInput = playerSelection

console.log(playerInput);


function playRound(playerInput,computerPlay) {if((computerPlay == "rock") && (playerInput == 'paper')) {alert("you win, paper beats rock"); ++playerScore} else if(computerPlay == "rock" && playerInput == 'rock') {alert("Tie")}else if(computerPlay == "rock" && playerInput == 'scissors') {alert("You lose, Rock beats Scissors"); ++computerScore} else if(computerPlay == "paper" && playerInput == 'rock') {alert("You lose, Paper beats Rock");++computerScore} else if(computerPlay == "paper" && playerInput == 'paper') {alert("Tie")} else if(computerPlay == "paper" && playerInput == 'scissors') {alert("You win, Scissors beats Paper"); ++playerScore} else if(computerPlay == "scissors" && playerInput == 'rock') {alert("You win, Rock beats Scissors"); ++playerScore} else if(computerPlay == "scissors" && playerInput == 'paper') {alert("You lose, Scissors beats Paper"); ++computerScore} else if(computerPlay == "scissors" && playerInput == 'scissors') {alert("Tie")} else{alert("Error!  Try again.")}
}



const computerSelection = computerPlay; 
console.log(playRound(computerPlay,playerInput));

}


alert("Playerscore"); 
alert(playerScore);
alert("Computerscore");
alert(computerScore);

if(computerScore > playerScore) {alert("You Lose")} else if(playerScore > computerScore) {alert("You win")} else{alert(Tie)}
