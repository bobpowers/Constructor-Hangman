var wordOptions = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fjord", "gazebo"];
var WordManipulator = function(){
	this.selectTheWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	this.arraySplit = function(){
		this.wordArray = this.selectTheWord.split("");
	};
	this.wordArray = [];
};
module.exports = WordManipulator;