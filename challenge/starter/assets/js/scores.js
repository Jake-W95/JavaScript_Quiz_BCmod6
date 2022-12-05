var scoreboard = document.getElementsByClassName('place');
// var place = scoreboard
var userScore = localStorage.getItem('userScore');
var saveBoard;
// var loadBoard; JSON.parse(localStorage.getItem('board'))
// var first = document.getElementById('1');
var userName = ''

// console.log(place, 'place')
function getUserName() {
    userName = prompt('Enter your name');
    if (userName.length > 10) {
        alert('Maximum 10 characters');
        getUserName();
    }
}
getUserName()
var nameAndScore = `${userName}:  ${userScore}`


console.log(scoreboard, 'scoreboard')
for (i in scoreboard){
    console.log(scoreboard[i], 'scoreboardIndex')


    var placeScore = JSON.parse(scoreboard[i].innerHTML)

    if (userScore > placeScore){
        scoreboard[i].innerHTML = nameAndScore;
        break
    }
    console.log(placeScore, 'PlaceScore')
}

console.log(
localStorage.setItem('board', scoreboard)

)