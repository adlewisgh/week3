var answer;

function setupGame() {
    $('#tbxGuess').val(" ");
    $("#message").val(" ");
    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter " + answer);
    $('#intro').show();
    $('#game').hide();
}
$(function () {
    $('#startGame').on("click", playGame);
    $('#btnGuess').on("click", handleGuess);
    setupGame();
});