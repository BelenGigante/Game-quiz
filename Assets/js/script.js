var el = document.querySelector(".timer");
var timer = 60;
var sec= "seconds";
var questions= document.querySelectorAll(".question")
var nex = "";
var pre = "";
var index = 0;
var cursor = 0;
var questionAnswer= ["c) Amber Heart","c) 7","a) Kim","c) Ben Affleck"];

var displayQuestion = function (){
    for (var question of questions){
        console.log(question);
        if (question.dataset.index != cursor){
            question.style.display="none";
        }else{
            question.style.display = "block";
        }
    }
};
nex = function(event){
    var element = event.target;
    console.log(element);
    if (element.matches(".question button")){
    if (cursor < questions.length -1){
        cursor++;
    }
    displayQuestion();
    }
};

document.addEventListener("click", nex);

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

