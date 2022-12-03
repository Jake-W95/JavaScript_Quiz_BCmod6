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


//Questions Array
var questionsList = [{
    question: 'question 1',
    answerA: 'answer A',
    answerB: 'answer B',
    answerC: 'answer C',
    AnswerD: 'answer D'
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

//Functions

//Misc
var count = 0//Question counter



    choices.addEventListener('click', function () {

        count++;
        console.log(count);
        loadQ()
        // return count
    })

startBtn.addEventListener('click', function () {
    startScrn.setAttribute('style', 'display:none;');
    questions.setAttribute('style', 'display:block;')
    loadQ()
})

function loadQ() {
    // count = click(
        
    var Q = questionsList[count]
    qTitle.innerHTML = Q.question;
    aBtn.innerHTML = Q.answerA;
    bBtn.innerHTML = Q.answerB;
    cBtn.innerHTML = Q.answerC;
    dBtn.innerHTML = Q.AnswerD;
    // click()
    

}


