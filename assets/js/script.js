//Game should not start until the DOM is finished loading
document.addEventListener('DOMContentLoaded', function () {});

const start = document.querySelector('#start')
console.log('start', start);
start.addEventListener('click', start);
let squares = document.getElementsByClassName('square');

for (let square of squares) {
    square.addEventListener('click', function () {
        if (square.classList.contains('ships')) {
            square.style.backgroundColor = 'red';
            didHit();
        } else {
            square.style.backgroundColor = 'black';
        }
        //   if (this.getAttribute('data-type') === 'submit') {
        //    alert('You clicked Submit!');
        //   } else {
        //       let gameType = this.getAttribute('data-type');
        //       runGame();
        //   }
    })
}
// The ships
let ships = [carrier, battleship, cruiser, submarine, destroyer];

//Computer ships placement
const width = 10;
shipLocation();
shipLocation();
shipLocation();
shipLocation();
shipLocation();

//Placement of computer ships
function shipLocation() {
    let randomStartIndex = Math.floor(Math.random() * width * width);

    if (!squares[randomStartIndex].classList.contains('ships')) {

        squares[randomStartIndex].classList.add('ships');
        squares[randomStartIndex].style.backgroundColor = 'green';
    } else {
        shipLocation()
    }
}
//Hit or miss a ship
//*Commenting out
//function didHit() { 
//  let isShip = userFire === userHit[0];
//
//  if (hit) {
//    alert('You hit an enemy ship');
// } else {
//   alert('You missed');
//  }
//}

//Get the current victories from the DOM and increase it with 1
function incrementVictory() {
    let oldVictory = parseInt(document.getElementById('victory').innertext);
    document.getElementById('victory').innerText = ++oldScore;
}

//Get the current defeats from the DOM and increase it with 1
function incrementDefeat() {
    let oldDefeat = parseInt(document.getElementById('defeat').innertext);
    document.getElementById('defeat').innerText = ++oldScore;
}
//When game is over
let gameOver = false

//Starting the game
function StartGame() {

}

function handleClick(e) {
    if (!gameOver) {
        if (e.target.classList.contains('ships')) {
            e.target.classList.add('hit')
            infoDisplay.textContent = 'You hit an enemy ship'
        }
    }
}

function checkShip(ship, shipLength) {
    if (user === 'player') {
        infoDisplay.textContent = `You sunk the enemies ship ${ship}`
        playerHits = userHits.filter(ship => ship !== ship)
    }
}

if (playerSunkShips.length === 5) {
    infoDisplay.textContent = 'You sunk all the enemies ships.'
    gameOver = true
} else {
    gameOver = false
}
console.log('playerSunkShips', playerSunkShips);