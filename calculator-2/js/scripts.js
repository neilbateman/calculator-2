$(document).ready(function() {

    $('#blanks form').submit(function(event) {
    event.preventDefault();

    var addNumber1Input = parseInt($("input#addNumber1").val());
    var addNumber2Input = parseInt($("input#addNumber2").val());
    var subtractNumber1Input = parseInt($("input#subtractNumber1").val());
    var subtractNumber2Input = parseInt($("input#subtractNumber2").val());
    var multiplyNumber1Input = parseInt($("input#multiplyNumber1").val());
    var multiplyNumber2Input = parseInt($("input#multiplyNumber2").val());

    var addResult = add(addNumber1Input, addNumber2Input);
    var subtractResult = subtract(subtractNumber1Input, subtractNumber2Input);
    var multiplyResult = multiply(multiplyNumber1Input, multiplyNumber2Input);

    $('.add').text(addResult);
    $('.subtract').text(subtractResult);
    $('.multiply').text(multiplyResult);

    });
  });

  var add = function(number1, number2) {
    return number1 + number2;
  };
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
