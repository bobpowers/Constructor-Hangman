var newWord = require("./word.js");

var HangmanConstructor = function(){
	this.newGame = function(){
		this.grabWord();
		this.createUnderscores();
		this.guesses = 9;
	}
	this.theWord = "";
	this.wordArray = [];
	this.underscores = [];
	this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	this.alphabetUpdate = function(){
		for (var i = 0; i < this.wordArray.length; i++) {
			for (var j = 0; j < this.alphabet.length; j++) {
				if (this.wordArray[i] === this.alphabet[j]){
					this.alphabet.splice(j, 1);
				}
			}
		}
	};
	this.guesses = 9;
	this.checkLetters = function(chkltr){
		console.log("\n \n");
		for (var i = 0; i < this.wordArray.length; i++) {
			if (this.wordArray[i] === chkltr) {
				this.underscores[i] = chkltr;
				console.log("Correct! \n");
			}
		}
		this.checkAlphabet(chkltr);
	};
	this.checkAlphabet = function(chkltr){
		for (var i = 0; i < this.alphabet.length; i++) {
			if (this.alphabet[i] === chkltr) {
				this.alphabet.splice(i, 1);
				console.log("Incorrect!");
				this.guesses--;
			}
		}
	};
	this.createUnderscores = function(){
		for (var i = 0; i < this.wordArray.length; i++) {
			this.underscores.push("_");
		}
	};
	this.grabWord = function(){
		var newGame = new newWord;
		newGame.arraySplit();
		this.theWord = newGame.selectTheWord;
		this.wordArray = newGame.wordArray;
	};
};

module.exports = HangmanConstructor;


