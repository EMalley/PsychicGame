// make array for alphabet and set variables for game. 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var chosenLetter;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];     //set pushes to this. 
// reference To DOM Elements
var $wins = document.getElementById("wins")
var $losses = document.getElementById("losses")
var $guessesLeft = document.getElementById("guessesLeft")
var $incorrectLetters = document.getElementById("incorrectLetters")

// randomly Chooses a letter from the Array
chosenLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(chosenLetter)


document.onkeyup = function (event) {
    var userGuess = event.key;
  

    if (userGuess === chosenLetter) {
        wins++;
        guessesLeft = 10
        lettersGuessed = []
       
    };

    if (userGuess != chosenLetter) {
        guessesLeft --;
        lettersGuessed.push(userGuess);
    };

    if (guessesLeft === 0) {
        losses++
        guessesLeft = 10
        lettersGuessed = []
    }


// logs information from game to DOM
$wins.textContent = wins;
$losses.textContent = losses;
$incorrectLetters.textContent = lettersGuessed;
$guessesLeft.textContent = guessesLeft;
}

