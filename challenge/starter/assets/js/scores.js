var scoreboard = document.getElementsByClassName('place');
var userScore = JSON.parse(localStorage.getItem('userScore'));
var userName = localStorage.getItem('userName')
// var userName = '';
var saveBoard = [];
var clearBoardBtn = document.getElementById('clear')




// console.log(scoreboard[0].innerHTML)
console.log(userName)
console.log(userScore)




// console.log(scoreboard[0].children[1])
if (scoreboard[0].children[1] === undefined){
    scoreboard[0].innerHTML = JSON.parse(localStorage.getItem('1'));
}
if (scoreboard[1].children[1] === undefined){
    scoreboard[1].innerHTML = JSON.parse(localStorage.getItem('2'));
}
if (scoreboard[2].children[1] === undefined){
    scoreboard[2].innerHTML = JSON.parse(localStorage.getItem('3'));
}
if (scoreboard[3].children[1] === undefined){
    scoreboard[3].innerHTML = JSON.parse(localStorage.getItem('4'));
}
if (scoreboard[4].children[1] === undefined){
    scoreboard[4].innerHTML = JSON.parse(localStorage.getItem('5'));
}
if (scoreboard[5].children[1] === undefined){
    scoreboard[5].innerHTML = JSON.parse(localStorage.getItem('6'));
}
if (scoreboard[6].children[1] === undefined){
    scoreboard[6].innerHTML = JSON.parse(localStorage.getItem('7'));
}
if (scoreboard[7].children[1] === undefined){
    scoreboard[7].innerHTML = JSON.parse(localStorage.getItem('8'));
}
if (scoreboard[8].children[1] === undefined){
    scoreboard[8].innerHTML = JSON.parse(localStorage.getItem('9'));
}
if (scoreboard[9].children[1] === undefined){
    scoreboard[9].innerHTML = JSON.parse(localStorage.getItem('10'));
}

for (i in scoreboard) {
    var placeName = scoreboard[i].children[0];
    var placeScore = scoreboard[i].children[1];
    var placeScoreValue = placeScore.innerHTML
    if (userScore > placeScoreValue) {
        placeName.innerHTML = userName;
        console.log(placeName.innerHTML, 'pName')
        placeScore.innerHTML = userScore;
        placeScoreValue = userScore
        console.log(placeScore, 'PS');
        console.log(userScore, 'us')
        console.log(i, placeScoreValue, 'PSV')
        break
    }
}


localStorage.setItem('1', (scoreboard[0].innerHTML));
localStorage.setItem('2', (scoreboard[1].innerHTML));
localStorage.setItem('3', (scoreboard[2].innerHTML));
localStorage.setItem('4', (scoreboard[3].innerHTML));
localStorage.setItem('5', (scoreboard[4].innerHTML));
localStorage.setItem('6', (scoreboard[5].innerHTML));
localStorage.setItem('7', (scoreboard[6].innerHTML));
localStorage.setItem('8', (scoreboard[7].innerHTML));
localStorage.setItem('9', (scoreboard[8].innerHTML));
localStorage.setItem('10', (scoreboard[9].innerHTML));
// console.log(scoreboard[0], 'saveBoard')
// clearBoardBtn.addEventListener('click', function(){
//     localStorage.clear
// })