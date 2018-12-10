 $(document).ready(function(){
   $("form#isaac").submit(function(event){
   var Q1 = $("input:radio[name=choice1]:checked").val();
   var Q2 = $("input:radio[name=choice3]:checked").val();
   var Q3 = $("input:radio[name=choice3]:checked").val();


   var youScore = parseInt(qN1)+parseInt(qN2)+parseInt(qN3);
   $("#youScore").text("HERE'S WHAT YOU SCORED: " +youScore + "%");

      //==== user Interface ====//


   $("form#isaac").hide();
   $("#youScore").show();
     event.preventDefault();
    });

  });
