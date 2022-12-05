var scoreboard = document.getElementById('highscores');
var userScore = localStorage.getItem('userScore');
var first = document.getElementById('1');
var userName = ''


getUserName()

function getUserName() {
    userName = prompt('Enter your name');
    if (userName.length > 10) {
        alert('Maximum 10 characters');
        getUserName();
    }
}
first.innerHTML = `${userName}:   ${userScore}`
// userName.length = 10;


console.log(userName)

// for (place of scoreboard){
//     if(userScore > place){
//         place = userScore
//     }
// }
console.log(userScore)
console.log(scoreboard)