var number = 20;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var score = 0;


var intervalId = setInterval(decrement, 1000);


function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>")
    
    if (number === 0){
        next();
        unanswered++;
        number = 21;
    }
}

$("#timer").html("<h2>" + number + "</h2>")

// Can't get last page to work
// Can't get timer to stop


var one = {
    question: "This character can be any animal or monster he chooses.",
    c1: "Cyborg",
    c2: "Robin",
    c3: "Beast Boy",
    c4: "Raven",
    key: function key() {

        $("#c1, #c2, #c4").click(function () {
            wrong()
        });

        $("#c3").click(function () {
            right()
        
        });

    }
};




var two = {
    question: "Where do the Teen Titans live?",
    c1: "Jump City",
    c2: "New York",
    c3: "Titanville",
    c4: "Your Mom's House",
    key: function key() {
        $("#c4, #c2, #c3").click(function () {
            wrong()
            
        });

        $("#c1").click(function () {
            right()
            
        });
    }
}

var three = {
    question: "Which character has mystical dark powers?",
    c1: "Cyborg",
    c2: "Robin",
    c3: "Beast Boy",
    c4: "Raven",
    key: function key() {
        $("#c3, #c2, #c1").click(function () {
            wrong()
            
        });

        $("#c4").click(function () {
            right()
            
        });
    }
}

var four = {
    question: "What is Raven's dad's name?",
    c1: "Starky",
    c2: "Trigon",
    c3: "Bob",
    c4: "Dark Knight",
    key: function key() {
        $("#c1, #c3, #c4").click(function () {
            wrong()
            
        });

        $("#c2").click(function () {
            right()
           
        });
    }
}

var five = {
    question: "Who is Robin's love interest?",
    c1: "Cyborg",
    c2: "Star Fire",
    c3: "Beast Boy",
    c4: "Raven",
    key: function key() {
        $("#c1, #c3, #c4").click(function () {
            wrong()
            
        });

        $("#c2").click(function () {
            right()
           
        });
    }
}

var six = {
    question: "Your Results",
    c1: "Correct: " + correct,
    c2: "Incorrect: " + incorrect,
    c3: "Unanswered: " + unanswered,
    c4: "Score: " + (correct / (incorrect + unanswered) * 100),
    key: function stop(){
        clearInterval(intervalID);
    }
    }


function right() {

    document.body.style.background = "url('https://vignette.wikia.nocookie.net/teen-titans-go/images/7/7b/Teen_titans_Gif.gif/revision/latest?cb=20141207002703') no-repeat right top";
    document.body.style.backgroundSize = "100%";
    $("#footer").html('<audio id= "audio"  autoplay src="assets/images/correct.mp3"></audio>');
    $("#question").html("Correct!");
    $("#c1, #c2, #c3, #c4").off("click");
    setTimeout(next, 4000)
    number = 24
    console.log(correct)
    return correct++;
}

function wrong() {
    document.body.style.background = "url('https://vignette.wikia.nocookie.net/teen-titans-go/images/5/5e/Robin_Wacks_Beast_Boy.gif/revision/latest?cb=20140805213838') no-repeat right top";
    document.body.style.backgroundSize = "100%";
    $("#footer").html('<audio id= "audio"  autoplay src="assets/images/wrong.mp3"></audio>');
    $("#question").html("Wrong!");
    $("#c1, #c2, #c3, #c4").off("click");
    setTimeout(next, 4000);
    number = 24
    console.log(incorrect)
    return incorrect++;

}

var questions = [one, two, three, four, five, six];

var i = -1

function next() {
    i++;
    var nextQuestion = questions[i]
    document.body.style.background = "url('https://vignette.wikia.nocookie.net/teen-titans-go/images/b/bb/Title_Sequence_3.png/revision/latest?cb=20140421134631') no-repeat right top";
    document.body.style.backgroundSize = "100%";
    $("#footer").html("");
    $("#question").html(nextQuestion.question);
    $("#c1").html(nextQuestion.c1);
    $("#c2").html(nextQuestion.c2);
    $("#c3").html(nextQuestion.c3);
    $("#c4").html(nextQuestion.c4);

    nextQuestion.key();

}
;

next();




    //Click action on each answer choice
    //Wrong/Right - setTimeout and then next question
    //Timer run out
