cardPos = 1;
//Advance to the next card
function nextCard(){
  $(".a"+cardPos).hide();
  $(".q"+cardPos).toggle();
  cardPos++;
  $(".q"+cardPos).toggle();
}
//Return to previous card
function prevCard(){
  $(".a"+cardPos).hide();
  $(".q"+cardPos).toggle();
  cardPos--;
  $(".q"+cardPos).toggle();
}
//show definition of term
function defShow(){
    $(".a"+cardPos).toggle();
}


$(document).ready(function(event){
  $(".q1").show();
  $(".terms").click(function(event){
    defShow();
  });
  $(".next").click(function(event){
    nextCard();
  });
  $(".previous").click(function(event){
    prevCard();
  });
});
