
function clicky() {
    alert("Clicked!");
}
$(function() {
    $('#p1').on("click", clicky);

    $('h3').on("click", function(){
        $(this).fadeOut('slow');
    });
    $("li:contains('1')").on("click", function(){
        $(this).hide();
    });
});
