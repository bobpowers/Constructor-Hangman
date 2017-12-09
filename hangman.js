var inquirer = require("inquirer");
var wordLogic = require("./letter.js");
var playerWins = 0;
var playerLosses = 0;

inquirer.prompt([ 
	{
		type: "input",
		message: "What is your name?",
		name: "username"
	},
	{
		type: "confirm",
		message: "Would you like to play a rousing game of Hangman?",
		name: "confirm",
		default: true
	},
]).then(function(inquirerResponse){
	if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username +"!");
      console.log("Lets play some Hangman!\n");
      console.log("\n****** Enter your letter and prepare to die! ******\n \n")
      startTheGame();
    }
    else {
      console.log("\n Hey " + inquirerResponse.username + ", stop wasting my time.\n");
    }
  });

var startTheGame = function(){
	var letsGo = new wordLogic;
	var displayLetters;
	letsGo.newGame();
	var recurringPrompt = function(){
		var displayLetters = letsGo.underscores.toString().replace(/,/g, " ");
		if (letsGo.guesses <= 0){
			playerLosses++;
			console.log ("You lost.\nThe word was: "+letsGo.theWord+".\n You have "+playerWins+" wins and "+playerLosses+" losses. \n\nStarting a new game...\n \n");
			startTheGame();
		} else {
			letsGo.alphabetUpdate();
			console.log("You have "+letsGo.guesses+" guesses remaining!\n");
			console.log("Guess the Word! "+displayLetters+"\n");
			inquirer.prompt([
				{
					type: "input",
					message: "Enter a letter!",
					name: "enteredLetter"
				},
			]).then(function(inquirerResponse){
					var userInput = inquirerResponse.enteredLetter.toLowerCase();
					letsGo.checkLetters(userInput);
					if (letsGo.underscores.toString().replace(/,/g, "") === letsGo.theWord){
						playerWins++;
						console.log("Woah. You won. \nYou have "+playerWins+" wins and "+playerLosses+" losses! \n\n");
						startTheGame();
					} else {
						recurringPrompt();
				}
			});
		}
	};
	recurringPrompt();
};





