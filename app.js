const userInput = prompt("Rock, Paper, or Scissor");

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissor') {
     return userInput;
 } else {
         console.log ('not a valid choice');
     }
    };
     
    function getComputerChoice(){
        const number = Math.floor(Math.random()*3);
        switch (number) {
            case 0:
            return 'rock';
            break;
            case 1:
            return 'paper';
            break;
            case 2:
            return 'scissor';
            break;


        }
    }
function determineWinner (userChoice, computerChoice){
    if (userChoice === computerChoice) { 
    return 'the game was a tie';
} else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
        return 'Computer won!'; 

        } else {
            return 'You won';
    }
} else if (userChoice === 'paper'){
   if (computerChoice === 'scissors'){
       return 'Computer won!';
       }else { 
           return 'You won!';
       }
       }

   } if (userChoice === 'scissors') {
       if (computerChoice === 'rock'){
           return 'Computer won!';
       } else {
           return 'You won!';
       }
   }


   function playGame () {
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerChoice();
    determineWinner (userChoice, computerChoice);

   }
   playGame();

   console.log(`you won ${userChoice}`);
   console.log(`computer won ${computerChoice}`);
  





