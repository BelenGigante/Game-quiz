var el = document.querySelector(".timer");
var timer = 60;
var sec= "seconds";
var question= document.querySelector(".question")
var nex = document.querySelector(".nex");
var pre = document.querySelector(".pre");
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


//nex prev
function navigate(dir){
    index = index + dir;
    if(index <0){

    }else if (index> quiz.length -1){
        
    }
    currentQuestion = quiz[index];
    question.textContent = currentQuestion;
}

nex.addEventListener("click", function(event){
    event.stopPropagation();
    navigate(1);
})
pre.addEventListener("click", function(event){
    event.stopPropagation();
    navigate(-1);
});
navigate(0);

