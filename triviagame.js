$(".main").hide();
$(".endGame").hide();



var number = 120;
$("#timer").html(number);
    var intervalId;
    $("#start").on("click",run);
    $("#start").on("click",show);
    function run() {

      intervalId = setInterval(decrement, 1000);

    }
    function decrement() {
      console.log('im workings')
      number--;
      $("#timer").html(number)

     if (number===0) {
      clearInterval(intervalId);
      checkAnswer1();
      $(".endGame").show();
      $(".main").hide();

    } 
    };
    function show(){
      $(".main").show()
    };
    

  


var correctCounter=0;
var wrongCounter=0;
var unanswered=0;
 
 console.log('Page Load');

function checkAnswer1(){
var selectedAnswer1= $('.question1 input[type="radio"]:checked').attr("value");
var selectedAnswer2= $('.question2 input[type="radio"]:checked').attr("value");
var selectedAnswer3= $('.question3 input[type="radio"]:checked').attr("value");
var selectedAnswer4= $('.question4 input[type="radio"]:checked').attr("value");
var selectedAnswer5= $('.question5 input[type="radio"]:checked').attr("value");
var selectedAnswer6= $('.question6 input[type="radio"]:checked').attr("value");
var selectedAnswer7= $('.question7 input[type="radio"]:checked').attr("value");
var selectedAnswer8= $('.question8 input[type="radio"]:checked').attr("value");
var selectedAnswer9= $('.question9 input[type="radio"]:checked').attr("value");
var selectedAnswer10= $('.question10 input[type="radio"]:checked').attr("value");
                    
 if (selectedAnswer1==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer1==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer1); 

if (selectedAnswer2==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer2==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer2); 

if (selectedAnswer3==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer3==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer3); 


if (selectedAnswer4==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer4==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer4); 


if (selectedAnswer5==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer5==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer5); 


if (selectedAnswer6==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer6==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer6); 


if (selectedAnswer7==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer7==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer7); 


if (selectedAnswer8==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer8==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer8); 


if (selectedAnswer9==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer9==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer9); 


if (selectedAnswer10==="correct") {
  correctCounter++;
  $("#correctCounter").html(correctCounter);
 } else if (selectedAnswer10==="wrong"){
  wrongCounter++;
  $("#wrongCounter").html(wrongCounter);
 }
 console.log(selectedAnswer10); 

};

