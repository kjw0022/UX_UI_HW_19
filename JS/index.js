console.log("Your index.js file is loaded correctly!");
    
$(document).ready(function() {
$(".customNav").hover(function(){
    $(this).css("color","#B97375");
}, function(){
    $(this).css("color","#02244E");
    console.log("You hovered");
});
});

$(function() {
    $('.projectHighlight').hover(function() {
      $(this).fadeTo(400,.6);
    }, function() {
      $(this).fadeTo(400,1);
    });
  });

$(".customFooter").hover(function(){
        $(this).css("color","#02244E");
    }, function(){
        $(this).css("color","#FFFFFF");
});
