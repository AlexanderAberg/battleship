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
    square.style.backgroundColor = 'blue';
        square.classList.remove('ships', 'hit', 'miss');
    }

    // Show the victory board
    document.querySelector('.victory-board').style.display = 'flex';

    // Update score display
    document.getElementById('victory').textContent = gameState.victories;
    document.getElementById('defeat').textContent = gameState.defeats;
}

// Setup event listeners
function setupEventListeners() {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', function () {
        initializeGame();
        startGame();
    });
    startButton.textContent = 'New Game';

    // Board clicks
    const squares = document.getElementsByClassName('square');
    for (let square of squares) {
        square.addEventListener('click', handleSquareClick);
    }
}

// Start the game
function startGame() {
    gameState.isGameStarted = true;
    gameState.ships = placeShips();
    updateInfoDisplay(`Find all 5 ships! You have ${gameState.maxMisses} attempts.`);
}

// Place ships randomly on the board
function placeShips() {
    const squares = document.getElementsByClassName('square');
    const shipPositions = [];

    while (shipPositions.length < gameState.totalShips) {
        const randomIndex = Math.floor(Math.random() * squares.length);
        const square = squares[randomIndex];

        if (!square.classList.contains('ships')) {
            square.classList.add('ships');
            shipPositions.push(square.innerText);
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