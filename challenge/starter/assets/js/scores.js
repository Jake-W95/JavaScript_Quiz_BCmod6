var scoreboard = document.getElementsByClassName('place');
// var place = scoreboard
var userScore = localStorage.getItem('userScore');
var saveBoard;



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

// var nameAndScore = `${userName}:  ${userScore}`



console.log(scoreboard, 'scoreboard')
for (i in scoreboard){
    // console.log(scoreboard[i], 'scoreboardIndex')
var placeName = scoreboard[i].children[0];
var placeScore = scoreboard[i].children[1];
var placeScoreValue = JSON.parse(placeScore.innerHTML)
console.log(placeScoreValue, 'value')
// var placeScoreValue = JSON.parse(placeScore)
console.log(placeName, 'pName')

    // var placeScore = JSON.parse(scoreboard[i].innerHTML)

    if (userScore > placeScoreValue){
        // scoreboard[i].innerHTML = nameAndScore;
        console.log(placeName, 'pName')
        placeName.innerHTML = userName;
        placeScore.innerHTML = userScore;
        break
    }
    // console.log(placeScore, 'PlaceScore')
}

console.log(
localStorage.setItem('board', scoreboard)

)