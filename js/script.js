$(document).ready(function() {

  $("form#isaac").submit(function(event){
  var qN1 = $("input:radio[name=choiceOne]:checked").val();
  var qN2 = $("input:radio[name=choiceTwo]:checked").val();
  var qN3 = $("input:radio[name=choiceThree]:checked").val();
  var qN4 = $("input:radio[name=choiceThree]:checked").val();


  var youScore = parseInt(qN1)+parseInt(qN2)+parseInt(qN3)+parseInt(qN4);
  $("#youScore").text("HI THERE! HERE'S WHAT YOU SCORED: " +youScore + "%");
  $("form#isaac").hide();
  $("result#youScore").show();
  event.preventDefault();
 });

});
