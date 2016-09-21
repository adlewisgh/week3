/*Document Ready*/
$ (function(){

$('#p1').css("style", "color:blue;");


$('h3').css("style", "font-size: 50pt;");

$("#listOfItems li").first().attr("style", "color:green;");

// or another way

$("listOfItems li")
.first()
.css({
    "color": "green;",
    "font-size": "4pt"
})
});


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
