// Game state
let gameState = {
    isGameStarted: false,
    shipsSunk: 0,
    totalShips: 5,
    ships: [],
    gameOver: false,
    victories: 0,
    defeats: 0,
    missCount: 0,
    maxMisses: 20
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    initializeGame();
    setupEventListeners();

    // Start the first game automatically
    startGame();
});

// Initialize games
function initializeGame() {
    // Reset game state but keep scores
    gameState = {
        isGameStarted: false,
        shipsSunk: 0,
        totalShips: 5,
        ships: [],
        gameOver: false,
        victories: gameState.victories || 0,
        defeats: gameState.defeats || 0,
        missCount: 0,
        maxMisses: 20
    };

    // Reset board colors
    const squares = document.getElementsByClassName('square');
for (let square of squares) {
    square.addEventListener('click', function () {
        if (square.classList.contains('ships')) {
            square.style.backgroundColor = 'red';
            if (shipLocations.includes(square.innerText));
            console.log('hit');
            shipsSunk++
            checkGameState();
            console.log(shipsSunk, gameOver)
        } else {
            square.style.backgroundColor = 'black';
        }
        //   if (this.getAttribute('data-type') === 'submit') {
        //    alert('You clicked Submit!');
        //   } else {
        //       let gameType = this.getAttribute('data-type');
        //       runGame();
        //   }
    });
}

//Placement of computer ships
function shipLocation() {
    for (i = 0; i < 5; i++) {
        let randomStartIndex = Math.floor(Math.random() * width * width);
        let chosenSquare = squares[randomStartIndex];
        if (!chosenSquare.classList.contains('ships')) {

            chosenSquare.classList.add('ships');
            //   chosenSquare.style.backgroundColor = 'green';
            shipLocations.push(chosenSquare.innerText);
        }
    }
}

//Computer ships placement
shipLocation();

//Hit or miss
function didHit(square) {
    let index = Array.from(squares).indexOf(square);
    shipStatus[index] = 'hit';
}


const checkGameState = () => {
    if (shipsSunk === 5) {
        gameOver = true;
    } else {
        gameOver = false;
    }
};


//Get the current victories from the DOM and increase it with 1
// function incrementVictory() {
//   let oldVictory = parseInt(document.getElementById('victory').innertext);
//   document.getElementById('victory').innerText = ++oldScore;
// }

//Get the current defeats from the DOM and increase it with 1
// function incrementDefeat() {
// let oldDefeat = parseInt(document.getElementById('defeat').innertext);
//  document.getElementById('defeat').innerText = ++oldScore;
// }

//Starting the game
function StartGame() {

}

function handleClick(e) {
    if (!gameOver) {
        if (e.target.classList.contains('ships')) {
            e.target.classList.add('hit');
            infoDisplay.textContent = ('You hit an enemy ship');
            if (isShipSunk(e.target)) {
                shipsSunk++;
                checkGameState(shipsSunk === 5);
                gameOver = true;
            }
        }
    }
}

function checkShip(ship, shipLength) {
    if (user === 'player') {
        infoDisplay.textContent = `You sank the enemies ship ${ship}`;
        playerHits = userHits.filter(ship => ship !== ship);
    }
}