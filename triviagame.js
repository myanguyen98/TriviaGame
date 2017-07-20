$(".main").hide();

var trivia1 = {
      question: "What was Hannah Montana's real life alter ego(in the show)?"
    , answers: ["Lily Truscott","Tracy Van Horn","Miley Stewart","Miley Skeech"]
    , correctAnswer: 2
  };
var trivia2 = {
      question: "What was the show's theme song?"
    , answers: ["Nobody's Perfect","This is the Life","One in a Million","The Best of Both Worlds"]
    , correctAnswer: 3
  };
var trivia3 = {
      question: "What was Hannah's celebrity on again-off again boyfriend's name?"
    , answers: ["Jake Ryan","Oliver Oken","Troy Bolton","Jackson Stewart"]
    , correctAnswer: 0
  };
var trivia4 = {
      question: "When Lily and Miley had to create a country for their history class, what did Miley call hers?"
    , answers: ["Mileytania","Mileytopia","Mylanta","Mileovia"]
    , correctAnswer: 2
  };
var trivia5 = {
      question: "What is Miley's horse's name?"
    , answers: ["Spirit","Blue Jeans","Copper","Fender"]
    , correctAnswer: 1
  };
var trivia6 = {
      question: "What did Jackson try to break the world record for?"
    , answers: ["Hot dog eating","Not blinking","Loudest burp","Pogo Sticking"]
    , correctAnswer: 3
  };
var trivia7 = {
      question: "Where does Miley live?"
    , answers: ["Los Angeles, California","Malibu,California","Nashville,Tennessee","Miami,Florida"]
    , correctAnswer: 1
  };
var trivia8 = {
      question: "Miley's dad,Robby Ray, has her teacher, Ms. Kunkle over for a date. The date ends when they get in a fight over what?"
    , answers: ["Tarragon","Miley's test Scores","Ms. Kunkle's last name","Robby Ray's goatee"]
    , correctAnswer: 0
  };
var trivia9 = {
      question: "What mascot does Miley become when she tries out for cheerleading?"
    , answers: ["Shark","Tiger","Pirate","Knight"]
    , correctAnswer: 2
  };
var trivia10 = {
      question: "What are Miley and Lily's arch nemeses names?"
    , answers: ["Sarah and Kelly","Rachel and Kylie","Samantha and Carly","Amber and Ashley"]
    , correctAnswer: 3
  };


var correctGuesses=0;          
for(var i = 1; i <= 10; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "correct" && radio.checked) {
      correctGuesses++;
    }
  }
}                   


var number = 120;
$("#timer").html(number);
    var intervalId;
    $("#start").on("click",run);
    $("#start").on("click",show);
    function run() {

      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#timer").html(number)
    };
    function show(){
      $(".main").show()
    };
    function stop(){
      number=0;
    };

if (number===0) {
  alert("hi")
} else {}    
      


