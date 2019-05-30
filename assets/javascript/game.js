// create all variables needed
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var computerChoices = ["a","b","c","d","e",];
var computerGuess = "";

function computerSelectRandomLetter () {
    computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function updateScores() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessLeft").innerHTML = guessLeft;
    document.querySelector("#guessSoFar").innerHTML = guessSoFar;
}

function resetScores() {
guessLeft = 9;
guessSoFar = [];
}

computerSelectRandomLetter();
// console.log(computerGuess);
updateScores();

document.onkeyup = function(event) {
    // subtract a guess left
    guessLeft--; 
    var userGuess = event.key.toLowerCase();
    guessSoFar.push(userGuess);
    updateScores();

    if (userGuess === computerGuess) {
        wins++;
        resetScores();
        updateScores();
        computerSelectRandomLetter();
    }
    
// if no guesses left
    if (guessLeft === 0) {
        losses++;
        updateScores();
        resetScores();
        computerSelectRandomLetter();
    }
}
