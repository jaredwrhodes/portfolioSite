var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "Rock";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
} 
else {
    computerChoice = "Scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1 , choice2) {
    if (choice1 === choice2) {
        console.log( "The result is a tie!");
    }
    else if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            console.log( "Rock Wins");
        }
        else {
            console.log( "Paper Wins");
        };  
    }
    
    else if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            console.log( "Rock Wins");
        }
        else {
            console.log( "Scissors Wins");
        };  
    }
    
    else if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            console.log( "Rock Wins");
        }
        else {
            console.log( "Scissors Wins");
        };  
    }; 
};

compare(userChoice, computerChoice);0