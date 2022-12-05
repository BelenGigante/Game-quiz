var el = document.querySelector(".timer");
var timer = 90;
function timeLeft(){
    var sec= "seconds";
    if (timer === 1){
        sec = "second";
    }
    el.textContent= timer + " " + sec + " left!";

}
function setUp(){
    el.textContent= timer + " seconds left!";
    var inter = setInterval(function(){
        timer--;
        el.textContent = timer + " seconds left!";
        if (timer === 0){
            clearInterval(inter);
            sendMessage();
        }
    },1000);
}
function sendMessage(){
    el.textContent=" ";

}
setUp();