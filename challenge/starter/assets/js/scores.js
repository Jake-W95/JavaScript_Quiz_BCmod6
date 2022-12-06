var scoreboard = document.getElementsByClassName('place');
var userScore = localStorage.getItem('userScore');
var userName = '';
var saveBoard = [];




function getUserName() {
    userName = prompt('Enter your name');
    if (userName.length > 10) {
        alert('Maximum 10 characters');
        getUserName();
    }
}
getUserName()






for (i in scoreboard){
    
var placeName = scoreboard[i].children[0];
var placeScore = scoreboard[i].children[1];
var placeScoreValue = JSON.parse(placeScore.innerHTML)
// console.log(placeScoreValue, 'value')

// console.log(placeName, 'pName')
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
console.log(scoreboard[0], 'saveBoard')