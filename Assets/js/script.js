var el = document.querySelector(".timer");
var timer = 60;
var sec= "seconds";
var questions= document.querySelectorAll(".question")
var nex = document.querySelector(".nex");
var pre = document.querySelector(".pre");
var index = 0;
var cursor = 0;
var currentQuestion;
/*var quiz= [
"pregunta 1",
"pregunta 2",
"pregunta 3",
"pregunta 4",
];
*/
var displayQuestion = function (){
    for (var question of questions){
        console.log(question);
        if (question.dataset.index != cursor){
            question.style.display="none";

        }
    }
};
var advance = function(){
    if (index<questions.length - 1){
        index++;
    }
    displayQuestion();
};
displayQuestion();

//timer
function timeLeft(){
}
el.addEventListener("click", function setUp(){
    el.textContent= timer + " seconds left!";
    var inter = setInterval(function(){
        timer--;
        el.textContent = timer + " seconds left!";
        if (timer === 1){
            sec = "second";
        }
        el.textContent= timer + " " + sec + " left!";
        if (timer === 0){
            clearInterval(inter);
            timer=60;
            sendMessage();
        }
    },1000);
})
function sendMessage(){
    el.textContent="Time's Up, try again.";
    //setUp();
 };
 //setUp();

var displayQuiz = function(){
    for(var question of questions){
        console.log(question);
        if (question.dataset.index != cursor){
            question.style.display="none";
        }else{
            question.style.display = "block";
        }
    }
};


