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
//Questions!!!!
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
        qCode: '',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //3
        question: 'Which of the following is the correct syntax?',
        qCode: '',
        answerA: 'var X = "template literal string $(X, Y)',
        answerB: 'var X = `template literal string ${Y} ${Z}`', //correct
        answerC: 'var X = `template literal string` `X`, `Y`',
        AnswerD: 'var X = "template literal string {X Y}',
        correctAns: 'B'
    },

    { //4
        question: 'What does the acronym DOM stand for',
        qCode: '',
        answerA: 'Digital Organization Mockup',
        answerB: 'Direct Object Management',
        answerC: 'Document Object Model', //correct
        AnswerD: 'Dubious Old Man',
        correctAns: 'C',
        bonus: 'D'
    },

    { //5
        question: 'Which of the following matches the resulting array?',
        qCode: "var colours = ['blue', 'orange', 'mauve', 'red']; colours.splice(2, 1, 'green', 'grey')",
        answerA:  "var colours = ['blue', 'orange', 'mauve', 'red', 'green', 'grey']", 
        answerB: "var colours = ['blue', 'orange', 'green', 'grey', 'red']", //correct
        answerC: "var colours = ['blue', 'green', 'grey', 'red']",
        AnswerD:  "var colours = ['green, 'grey', 'blue', 'orange', 'mauve', 'red']",
        correctAns: 'B'
    },

    { //6
        question: '?',
        qCode: '',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //7
        question: '?',
        qCode: '',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

]
//Time
var timeLeft = document.getElementById('time');
var minute = 60000;
var second = 1000;
var totalTime = questionsList.length * (12 * second);
timeLeft.innerText = totalTime / 1000;

//Misc
var count = 0//Question counter
var incorrectAU = document.getElementById('incorrectAU');
var correctAU = document.getElementById('correctAU');
console.log(totalTime)

//COUNTDOWN


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
        qCode: '',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //3
        question: 'Which of the following is the correct syntax?',
        qCode: '',
        answerA: 'var X = "template literal string $(X, Y)',
        answerB: 'var X = `template literal string ${Y} ${Z}`', //correct
        answerC: 'var X = `template literal string` `X`, `Y`',
        AnswerD: 'var X = "template literal string {X Y}',
        correctAns: 'B'
    },

    { //4
        question: 'What does the acronym DOM stand for',
        qCode: '',
        answerA: 'Digital Organization Mockup',
        answerB: 'Direct Object Management',
        answerC: 'Document Object Model', //correct
        AnswerD: 'Dubious Old Man',
        correctAns: 'C',
        bonus: 'D'
    },

    { //5
        question: 'Which of the following matches the resulting array?',
        qCode: "var colours = ['blue', 'orange', 'mauve', 'red']; colours.splice(2, 1, 'green', 'grey')",
        answerA:  "var colours = ['blue', 'orange', 'mauve', 'red', 'green', 'grey']", 
        answerB: "var colours = ['blue', 'orange', 'green', 'grey', 'red']", //correct
        answerC: "var colours = ['blue', 'green', 'grey', 'red']",
        AnswerD:  "var colours = ['green, 'grey', 'blue', 'orange', 'mauve', 'red']",
        correctAns: 'B'
    },

    { //5
        question: '?',
        qCode: '',
        answerA: 'For In',
        answerB: 'While',
        answerC: 'For of', //correct
        AnswerD: 'do/while',
        correctAns: 'C'
    },

    { //6
        question: '?',
        qCode: '',
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
    var countdown = setInterval(function () { //WORKING COUNTDOWN
        totalTime -= second;
        timeLeft.innerText = totalTime / 1000;
    
        console.log(totalTime);
        if (totalTime/1000 == -1) {
            clearInterval(countdown);
            timeUp()
    timeLeft.innerText = 0;
        }
    }, 1000)

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
    alert('I am an old man');
    totalTime += 20*second;
    qResult.innerHTML = 'Old Man Bonus! Extra 10 seconds!'
}




// console.log(colours)
