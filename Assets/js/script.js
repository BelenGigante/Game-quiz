var timer = document.querySelector(".timer");
var timeLeft = 30;
var seconds = "seconds";


function clock() {
if (timeLeft === 1){
    seconds = "second";
}
timer.textContent = timeLeft + " " + seconds + " left.";
}

function countDown() {
    timer.textContent = timeLeft +  seconds + " left.";
    
    var interval = setInterval(function(){
    timeLeft--;
    timer.textContent = timeLeft + "" + seconds + " left.";

    if (timeLeft === 0){
        clearInterval(interval);
        sendMessage();
    }
}, 300);
}
function sendMessage(){
    timer.textContent = " ";
}
setTimeout();