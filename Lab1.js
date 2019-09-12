
var userChoice;
var computerScore = 0;
var playerScore = 0;
var draws = 0;
function setText(txt) {
	$('#wins').text(playerScore);
	$('#loses').text(computerScore);
	$('#draws').text(draws);
}

function makeUserChoice(userChoice) {
	var computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice == 0) {
		computerChoice = "rock";
		
	}
	else if(computerChoice == 1){
		computerChoice = "paper";
		
	}
	else {
		computerChoice = "scissors";
		
	};
	let resultMessage = 'Computer wins, try harder!';
	if (userChoice == computerChoice) {
   document.getElementById("message").innerHTML = `You both tied, play again`;
    draws += 1;
		console.log(draws);  console.log(playerScore);  console.log(computerScore); 
        document.getElementById("score").innerHTML = `playerWins: ${playerScore} playerDraws: ${draws} playerLosses: ${computerScore}`;  
} else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "scissors" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "rock")
  ) {
    document.getElementById("message").innerHTML = `User wins, great job!`;
    playerScore += 1;
     	console.log(draws);  console.log(playerScore);  console.log(computerScore); 
        document.getElementById("score").innerHTML = `playerWins: ${playerScore} playerDraws: ${draws} playerLosses: ${computerScore}`;  
  } else {
    computerScore += 1;
    document.getElementById("message").innerHTML = `You Lost`;
		console.log(draws);  console.log(playerScore);  console.log(computerScore); 
 		document.getElementById("score").innerHTML = `playerWins: ${playerScore} playerDraws: ${draws} playerLosses: ${computerScore}`;
 		 }

};
function resetGame(){
	playerScore = 0;
	draws = 0;
	computerScore = 0;
	 document.getElementById("score").innerHTML = `playerWins: ${playerScore} playerDraws: ${draws} playerLosses: ${computerScore}`;
	 document.getElementById("message").innerHTML = `Lets play again!!`;
}
