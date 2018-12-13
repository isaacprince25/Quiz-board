$(document).ready(function() {

  $("form#isaac").submit(function(event){
  var qN1 = $("input:radio[name=choiceOne]:checked").val();
  var qN2 = $("input:radio[name=choiceTwo]:checked").val();
  var qN3 = $("input:radio[name=choiceThree]:checked").val();
  var qN4 = $("input:radio[name=choiceThree]:checked").val();


  var youScore = parseInt(choiceOne)+parseInt(choiceTwo)+parseInt(choiceThree);
  $("#youScore").text("HI THERE! HERE'S WHAT YOU SCORED: " +youScore + "%");




  $("form#isaac").hide();
  $("#youScore").show();
    event.preventDefault();
   });

});



























 
