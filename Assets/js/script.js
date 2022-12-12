var el = document.querySelector(".question button");
var timer = 60;
var timerEl = document.querySelector(".timer");
var sec = "seconds";
var questions = document.querySelectorAll(".question")
var nex = "";
var index = 0;
var cursor = 0;
var questionAnswer = [2, "c", "a", "c"];

var displayQuestion = function () {

    for (var question of questions) {
        if (question.dataset.index != cursor) {
            question.style.display = "none";
        } else {
            question.style.display = "block";
        }
    }
};
nex = function (event) {
    var element = event.target;
    if (element.matches(".question button")) {
        var answer = element.dataset.choice === questionAnswer[cursor];
        console.log(element);
        console.log(element.dataset.choice);
        console.log(questionAnswer[cursor]);
        console.log(answer);
        if (cursor < questions.length - 1) {
            cursor++;
        }
        displayQuestion();
    }
    timerEl.textContent = timer + " seconds left!";
if (timer > 0) {
    var inter = setInterval(function () {
        timer--;
        timerEl.textContent = timer + " seconds left!";
        if (timer === 1) {
            sec = "second";
        }
        el.textContent = timer + " " + sec + " left!";
        if (timer === 0) {
            clearInterval(inter);
            sendMessage();
            return;
        }
    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Time's Up, try again.";
};
};

document.addEventListener("click", nex);

displayQuestion();


