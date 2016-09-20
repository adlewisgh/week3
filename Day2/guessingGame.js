//Create a variable to hold the answer.
var answer;

// Set up the game.
function setupGame() {
    //Clear out old values.
    $('#tbxGuess').val(" ");
    $("#message").val(" ");

    // come up with the answer.
    answer = parseInt(Math.random(2) * 10);
    console.log("Cheater! Don't you dare enter " + answer);

    //Hide Show the approptriate divs.
    $('#intro').show();
    $('#game').hide();

}
// handle the guess.
function handleGuess() {
    var guess = $('#tbxGuess').val();
    if (+guess == answer) {
        //tell them the answer is right
        $('#message').text("You're Right!"); 

    }
    else {
        // Tell them the answer is wrong.
        $("#message").text("Nope, try again!");
        $("#tbxGuess").val("");
        $("#tbxGuess").focus();
    }
}

// set up the page for the game.
function playGame() {
    $('#intro').hide();
    $('#game').show();
}

//when the page loads, setup the game.
$(function () {

    //wire up event handlers.
    $('#startGame').on("click", playGame);
    $('#btnGuess').on("click", handleGuess);

    // Start the game.
    setupGame();
});