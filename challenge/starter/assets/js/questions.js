//Section Elements
var startScrn = document.getElementById('start-screen');
var questions = document.getElementById('questions');
var choices = document.getElementById('choices');
var body = document.body

//Button Elements
var startBtn = document.getElementById('start-button');
var aBtn = document.getElementById('ansA');
var bBtn = document.getElementById('ansB');
var cBtn = document.getElementById('ansC');
var dBtn = document.getElementById('ansD');

//Text Elements
var qTitle = document.getElementById('question-title');
var qCode = document.getElementById('qCode');
var qResult = document.getElementById('qResult');

//Time
var timeLeft = document.getElementById('time');
var minute = 60000;
var second = 1000;
var totalTime = 0.1 * minute;
timeLeft.innerText = totalTime / 1000;



var incorrectAU = document.getElementById('incorrectAU');
var correctAU = document.getElementById('correctAU');
//Misc

var count = 0//Question counter
console.log(totalTime)


// var timerTest = setInterval(function(){
//     console.log('bye')
// }  , 1000)


var countdown = setInterval(function () { //WORKING COUNTDOWN
    totalTime -= second;
    timeLeft.innerText = totalTime / 1000;

    console.log(totalTime);
    if (totalTime/1000 == -1) {
        clearInterval(countdown);
        timeUp()

    }
}, 1000)

// if (totalTime === 0){
// }





//Questions Array
var questionsList = [
    { //1
        question: 'In this code, what has the value of "2"',
        qCode: 'function myFunction(x, y) {return x + y}; \n myFunction(2, 7)',
        answerA: 'Reference',
        answerB: 'Argument', //correct
        answerC: 'Parameter',
        AnswerD: 'Method',
        correctAns: 'B'
    },

    { //2
        question: 'Which loop is best suited towards iterating over an array?',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //3
        question: 'Which of the following is the correct syntax?',
        answerA: 'var X = "template literal string $(X, Y)',
        answerB: 'var X = `template literal string ${Y} ${Z}`', //correct
        answerC: 'var X = `template literal string` `X`, `Y`',
        AnswerD: 'var X = "template literal string {X Y}',
        correctAns: 'B'
    },

    { //4
        question: 'What does the acronym DOM stand for',
        answerA: 'Digital Organization Mockup',
        answerB: 'Direct Object Management',
        answerC: 'Document Object Model', //correct
        AnswerD: 'Dubious Old Man',
        correctAns: 'C',
        bonus: 'D'
    },

    { //5
        question: '?',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //5
        question: '?',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //6
        question: '?',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

]
// console.log(correct, 'correct')
//Functions

// Next Question
choices.addEventListener('click', function () {
    count++;
    console.log(count);
    setTimeout(loadQ, 500);
}
)
// Start Quiz 
startBtn.addEventListener('click', function () {
    startScrn.setAttribute('style', 'display:none;');
    questions.setAttribute('style', 'display:block;')
    loadQ();


}
)
// Populate Question HTML
function loadQ() {
    var Q = questionsList[count]
    qTitle.innerHTML = Q.question;
    qCode.innerHTML = Q.qCode;
    aBtn.innerHTML = Q.answerA;
    bBtn.innerHTML = Q.answerB;
    cBtn.innerHTML = Q.answerC;
    dBtn.innerHTML = Q.AnswerD;
}
aBtn.addEventListener('click', function () {
    if (questionsList[count].correctAns === 'A') {
        correct();
    } else {
        incorrect();
    }
})
bBtn.addEventListener('click', function () {
    if (questionsList[count].correctAns === 'B') {
        correct();
    } else {
        incorrect();
    }
})
cBtn.addEventListener('click', function () {
    if (questionsList[count].correctAns === 'C') {
        correct()
    } else {
        incorrect()
    }
})
dBtn.addEventListener('click', function () {
    if (questionsList[count].correctAns === 'D') {
        correct()
    } else {
        incorrect()
    }
    if (questionsList[count].bonus === 'D') {
        oldMan()
    }
})
// correct()
function correct() {
    qResult.innerHTML = 'Nailed it!';
    correctAU;
}
//incorrect()
function incorrect() {
    qResult.innerHTML = 'Bad luck!';
    totalTime -= (10 * second);
    incorrectAU.onplay
}
function timeUp() {
    alert("Time's UP!")
}
// }

function oldMan() {
    alert('I am an old man')
}

