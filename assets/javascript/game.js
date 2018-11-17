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
var $guessesLeft = document.getElementById("guesses-Left")
var $incorrectGuesses = document.getElementById("incorrect-Guesses")

// randomly Chooses a letter from the Array
chosenLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(chosenLetter)


document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === chosenLetter) {
        ("wins: ") + wins++;
    }
    else {("losses: ") + $guessesLeft-- }

    if (guessesLeft === 0) {
        ("guessesLeft: ") + $losses++
    }
    // logs information from game to DOM
    $wins.innerHTML = wins;
    $losses.innerHTML = losses;
    $incorrectGuesses.innerHTML = lettersGuessed
}