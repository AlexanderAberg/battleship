//Game should not start until the DOM is finished loading
document.addEventListener('DOMContentLoaded', function () {});

const start = document.querySelector('#start')
console.log('start', start);
start.addEventListener('click', StartGame);
let squares = document.getElementsByClassName('square');

//When game is over
let gameOver = false

// The ships
let ships = [carrier, battleship, cruiser, submarine, destroyer];

let shipsSunk = 0;

const width = 10;

let shipLocations = [];
console.log()

for (let square of squares) {
    square.addEventListener('click', function () {
        if (square.classList.contains('ships')) {
            square.style.backgroundColor = 'red';
            if (shipLocations.includes(square.innerText))
                console.log('hit');
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

//Placement of computer ships
function shipLocation() {
    for (i = 0; i < 5; i++) {
        let randomStartIndex = Math.floor(Math.random() * width * width);
        let chosenSquare = squares[randomStartIndex]
        if (!chosenSquare.classList.contains('ships')) {

            chosenSquare.classList.add('ships');
            chosenSquare.style.backgroundColor = 'green';
            shipLocations.push(chosenSquare.innerText)
        }
    }
}

//Computer ships placement
shipLocation();
//Hit or miss
//function didHit(square) {
// let index = Array.from(squares).indexOf(square);
//  shipStatus[index] = 'hit';

//Is the ship sunk?
//  if (shipStatus.filter(status => status === 'hit')) length === ships[index].shipsSunk++;
// console.log(`Ship ${index} sunk`);
//}

//Is all ships sunk=
//if (shipsStatus.every(status => status === 'hit')) {
//  gameOver = true;
//  infoDisplay.textContent = 'You sank all enemy ships';
//}

//if (playerShipsleft == 0)
// if (true = gameOver) {

// } else {
//      playerShipsleft -= 1
//  }

const checkGameState = () => {
    if (shipsSunk === 5) {
        gameOver = true
    } else {
        gameOver = false
    }
}


// if (hit) {
//  alert('You hit an enemy ship');
// } else {
// alert('You missed');



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
        infoDisplay.textContent = `You sank the enemies ship ${ship}`
        playerHits = userHits.filter(ship => ship !== ship)
    }
}

// if (playerSunkShips.shipLength === 5) {
//     infoDisplay.textContent = 'You sunk all the enemies ships.'
//     gameOver = true
// } else {
//     gameOver = false
// }
console.log('playerSunkShips', playerSunkShips);