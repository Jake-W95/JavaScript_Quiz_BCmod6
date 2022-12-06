var scoreboard = document.querySelectorAll('li');
var i = 0;
var userName;

var userScore = JSON.parse(localStorage.getItem('userScore'));




function getUserName() {
    userName = prompt('Enter your name');
    if (userName.length > 10) {
        alert('Maximum 10 characters');
        getUserName();
    }
    localStorage.setItem('userName', userName)
}
getUserName()

for (i in scoreboard) {
    var placeName = scoreboard[i].firstChild.lastChild.textContent;
var placeScore = JSON.parse(scoreboard[i].lastChild.lastChild.nodeValue);
    console.log(placeScore);
    console.log(userScore)
    if (userScore > placeScore) {
        alert('balls')
        placeName = userName
        placeScore = userScore
        break
    } 
}
// localStorage.getItem('placeName1', scoreboard[i].firstChild.firstChild.innerHTML)
// localStorage.getItem('placeScore1', scoreboard[i].firstChild.lastChild.innerHTML)

//     // else if (scoreboard.)  {
//     //     alert('Oooh, didn\'t make it on the board')
//     // }
    
    
// }

// localStorage.setItem('scoreboard', JSON.stringify(document.body.div.ol))
// console.log(document.getElementsByClassName('score'))
// localStorage.setItem('scores', JSON.stringify(document.getElementsByClassName('score'))) 
