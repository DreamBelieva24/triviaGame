var number = 20;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var score = 0;


function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>")
}

$("#timer").html("<h2>" + number + "</h2>")

run();

var one = {
    question: "Here is question one",
    c1: "1choice one",
    c2: "1choice two",
    c3: "1choice three right",
    c4: "1choice four",
};

var two = {
    question: "Here is question TWO",
    c1: "2choice one",
    c2: "2choice two",
    c3: "2choice three",
    c4: "2choice four"
}

$("#question").html(one.question);
$("#c1").html(one.c1);
$("#c2").html(one.c2);
$("#c3").html(one.c3);
$("#c4").html(one.c4);


$("#c1, #c2, #c4").click(function () {
    wrong()
    number = 21
});

$("#c3").click(function () {
    right()
    number = 21
});

function right() {
    alert("right!")
    next();
}

function wrong() {
    alert("wrong")
    next();
}

var questions = [one, two]

function next() {
    i = 0
    i++;
    var nextQuestion = questions[i]
    console.log(nextQuestion);
    $("#question").html(nextQuestion.question);
    $("#c1").html(nextQuestion.c1);
    $("#c2").html(nextQuestion.c2);
    $("#c3").html(nextQuestion.c3);
    $("#c4").html(nextQuestion.c4);
}
    ;





    //Click action on each answer choice
    //Wrong/Right - setTimeout and then next question
    //Timer run out
