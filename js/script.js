 $(document).ready(function) {

   $("form#isaac").sumbit(function(event){
      var numberOne = $("input:radio[name=choiceOne]:checked").val();
      var numbaerTwo = $("input:radio[name=choiceTwo]:checked").val();
      var numberThree = $("input:radio[name=choiceThree]:checked").val();
      var numberFour = $("input:radio[name=choiceFour]:checked").val();

      var totalScore =parseInt(numberOne)+ pareInt(numberTwo)+ parseInt(numberThree)+parseInt(numberFour);
      $("#totalscore").text("Total Score" + totalScore+"mks");


      $("#totalScore").show();
   })
 }
