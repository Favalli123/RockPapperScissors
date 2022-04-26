const choice = ["rock", "paper", "scissors"];

let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

let computerPlay = randomItem;
    
console.log(computerPlay);

let playerSelection = prompt("rock, paper, scissors");

let playerInput = playerSelection

console.log(playerInput);

function playRound(playerInput,computerPlay) {if((computerPlay == "rock") && (playerInput == 'paper')) {alert("you win, paper beats rock")} else if(computerPlay == "rock" && playerInput == 'rock') {alert("Tie")}else if(computerPlay == "rock" && playerInput == 'scissors') {alert("You lose, Rock beats Scissors")} else if(computerPlay == "paper" && playerInput == 'rock') {alert("You lose, Paper beats Rock")} else if(computerPlay == "paper" && playerInput == 'paper') {alert("Tie")} else if(computerPlay == "paper" && playerInput == 'scissors') {alert("You win, Scissors beats Paper")} else if(computerPlay == "scissors" && playerInput == 'rock') {alert("You win, Rock beats Scissors")} else if(computerPlay == "scissors" && playerInput == 'paper') {alert("You lose, Scissors beats Paper")} else if(computerPlay == "scissors" && playerInput == 'scissors') {alert("Tie")} else{alert("Error!  Try again.")}
}




const computerSelection = computerPlay; 
console.log(playRound(computerPlay,playerInput));
