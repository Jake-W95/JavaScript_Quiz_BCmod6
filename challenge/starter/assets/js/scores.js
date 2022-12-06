var scoreboard = document.getElementsByClassName('place');
var userScore = localStorage.getItem('userScore');
var userName = '';
var saveBoard = [];
var clearBoardBtn = document.getElementById('clear')
console.log(scoreboard[0].childNodes[0])
// if (scoreboard[0] == null){
    scoreboard[0].innerHTML = JSON.parse(localStorage.getItem('1'));
// }
// if (scoreboard[1] == null){
scoreboard[1].innerHTML = JSON.parse(localStorage.getItem('2'))
// }
// if (scoreboard[2] == null){
scoreboard[2].innerHTML = JSON.parse(localStorage.getItem('3'));
// }
// if (scoreboard[3] == null){
scoreboard[3].innerHTML = JSON.parse(localStorage.getItem('4'));
// }
// if (scoreboard[4] == null){
scoreboard[4].innerHTML = JSON.parse(localStorage.getItem('5'));
// }
// if (scoreboard[5] == null){
scoreboard[5].innerHTML = JSON.parse(localStorage.getItem('6'));
// }
// if (scoreboard[6] == null){
scoreboard[6].innerHTML = JSON.parse(localStorage.getItem('7'));
// }
// if (scoreboard[7] == null){
scoreboard[7].innerHTML = JSON.parse(localStorage.getItem('8'));
// }
// if (scoreboard[8] == null){
scoreboard[8].innerHTML = JSON.parse(localStorage.getItem('9'));
// }
// if (scoreboard[9] == null){
scoreboard[9].innerHTML = JSON.parse(localStorage.getItem('10'));
// }

function getUserName() {
    userName = prompt('Enter your name');
    if (userName.length > 10) {
        alert('Maximum 10 characters');
        getUserName();
    }
    localStorage.setItem('userName', userName)
}
getUserName()

for (i in scoreboard){
var placeName = scoreboard[i].children[0];
var placeScore = scoreboard[i].children[1];
var placeScoreValue = JSON.parse(placeScore.innerHTML)
    if (userScore > placeScoreValue){
        // console.log(placeName, 'pName')
        placeName.innerHTML = userName;
        placeScore.innerHTML = userScore;
        break
    }
    
}
localStorage.setItem('1', JSON.stringify(scoreboard[0].innerHTML));
localStorage.setItem('2', JSON.stringify(scoreboard[1].innerHTML));
localStorage.setItem('3', JSON.stringify(scoreboard[2].innerHTML));
localStorage.setItem('4', JSON.stringify(scoreboard[3].innerHTML));
localStorage.setItem('5', JSON.stringify(scoreboard[4].innerHTML));
localStorage.setItem('6', JSON.stringify(scoreboard[5].innerHTML));
localStorage.setItem('7', JSON.stringify(scoreboard[6].innerHTML));
localStorage.setItem('8', JSON.stringify(scoreboard[7].innerHTML));
localStorage.setItem('9', JSON.stringify(scoreboard[8].innerHTML));
localStorage.setItem('10', JSON.stringify(scoreboard[9].innerHTML));
// console.log(scoreboard[0], 'saveBoard')
// clearBoardBtn.addEventListener('click', function(){
//     localStorage.clear
// })