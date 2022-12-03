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
}]
var startScrn = document.getElementById('start-screen')
var startBtn = document.getElementById('start')
var questions = document.getElementById('questions')


startBtn = addEventListener('click', function(){
startScrn.setAttribute('style', 'display:none;');
questions.setAttribute('style', 'display:block;')
})