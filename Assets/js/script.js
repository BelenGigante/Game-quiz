var el = document.querySelector(".timer");
var timer = 60;
var question= document.querySelector(".question")
var nex = question.querySelector(".nex");
var pre = question.querySelector(".pre");
var index = 0;
var currentQuestion;
var quiz= [
"pregunta 1",
"pregunta 2",
"pregunta 3",
"pregunta 4",
];

//timer
function timeLeft(){
    var sec= "seconds";
    if (timer === 1){
        sec = "second";
    }
    el.textContent= timer + " " + sec + " left!";

}
el.addEventListener("click", function setUp(){
    el.textContent= timer + " seconds left!";
    var inter = setInterval(function(){
        timer--;
        el.textContent = timer + " seconds left!";
        if (timer === 0){
            clearInterval(inter);
            sendMessage();
        }
    },1000);
})
//nex prev
function navigate(dir){
    index = index + dir;
    if(index <0){
        index = quiz.length - 1;
    }else if (index> quiz.length -1){
        index=0;
    }
    currentQuestion = quiz[index];
    quiz.textContent = currentQuestion;
}
nex.addEventListener("click", function(event){
    event.stopPropagation();
    navigate(-1);
});
navigate(0);

function sendMessage(){
    el.textContent="Time's Up";
 };

setUp();