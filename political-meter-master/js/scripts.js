$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var question2 = parseInt($("#question-two").val());
    var question3 = parseInt($("#question-three").val());
    var question4 = parseInt($("#question-four").val());
    var question5 = parseInt($("#question-five").val());
    var sex = $("#sex").val();
    var result = question2 + question3 + question4 + question5;

    if(result >= 3 && sex === "1") {
    alert("you are Alexandria Ocasio-Cortez")
  } else if(result >= 3 && sex === "-1"){
    alert("you are Bernie Sanders")
  } else if((result <= 3 && result >= -3) && sex === "1"){
    alert("you are Hillary Clinton")
  } else if((result <= 3 && result >= -3) && sex === "-1"){
    alert("you are Ben Carson")
  } else if(result <= 3 && sex === "1"){
    alert("you are Sarah Palin")
  } else if(result <= 3 && sex === "-1"){
    alert("you are Ted Cruz")
  } else if(sex === "0"){
    alert("you are Danica Roem")

  }

  });
});
