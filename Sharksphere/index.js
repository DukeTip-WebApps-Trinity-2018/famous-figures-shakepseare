$(document).ready(function () {
    $('.size007').hover(btnSizeCarouselon,btnSizeCarouseloff);
    $('#toBe').hover(toBeQuote,toBeQuotegone);
});

function btnSizeCarouselon(){
    $(this).html("Learn More About Shakespeare");
    
}
function btnSizeCarouseloff() {
  $(this).html("William Shakespeare")}


  function toBeQuote() {
     $(this).html("Prince Hamlet-Hamlet Act III, Scene I");
 }
 function toBeQuotegone() {
     $(this).html("To Be Or Not To be, That Is The Question.")
 }
