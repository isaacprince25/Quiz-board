 $(document).ready(function() {

   $("form#quizBoard").sumbit(function(event){
       var choiceOne = $("input:radio[name=choiceOne]:checked").val();
       var choiceTwo = $("input:radio[name=choiceTwo]:checked").val();
       var choiceThree = $("input:radio[name=choiceThree]:checked").val();
       var choiceFour = $("input:radio[name=choiceFour]:checked").val();

       var totalScore =parseInt(choiceOne)+ parseInt(choiceTwo)+ parseInt(choiceThree)+parseInt(choiceFour);
       $("#totalScore").text("Total Score" + totalScore+"mks");

       $("#totalScore").show();

   });
 });
