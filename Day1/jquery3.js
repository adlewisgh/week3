function myButton_Click() {
    alert("Clicked!");
}
$(function() {
    //wire up the click event hander.
    $("#myButton").on("click", myButton_Click);

    $("li:contains('mad')").on("click", function(){
        $(this).hide();
    });
    $("#myButton").on("click", function(){
        $(this).hide();
    });
});
