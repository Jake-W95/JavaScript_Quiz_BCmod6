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

//Misc

var count = 0//Question counter
// var correct = false;

//Questions Array
var questionsList = [{

    question: 'In this code, what has the value of "2"',
    qCode: 'function myFunction(x, y) {return x + y}; \n myFunction(2, 7)',
    answerA: 'Reference',
    answerB: 'Argument', //correct
    answerC: 'Parameter',
    AnswerD: 'Method',
    correctAns: 'B'
},
{
    question: 'question 2',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
},
{
    question: 'question 3',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
},
{
    question: 'question 4',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
},
{
    question: 'question 5',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
},
{
    question: 'question 6',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
},
{
    question: 'question 7',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
},
{
    question: 'question 8',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
},
{
    question: 'question 9',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
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
    loadQ()
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
    if (question[count].correctAns === 'C') {
        correct()
    } else {
        incorrect()
    }
})
dBtn.addEventListener('click', function () {
    if (question[count].correctAns === 'D') {
        correct()
    } else {
        incorrect()
    }
})
// correct();
function correct() {
    qResult.innerHTML = 'Nailed it!'
}
function incorrect() {

    qResult.innerHTML = 'Bad luck!'
}

// }

