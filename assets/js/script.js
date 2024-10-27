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

    return shipPositions;
}

// Handle square click
function handleSquareClick(event) {
    if (gameState.gameOver) {
        updateInfoDisplay('Game is over! Click New Game to play again.');
        return;
    }

    const square = event.target;

    // Prevent clicking already tried squares
    if (square.classList.contains('hit') || square.classList.contains('miss')) {
        updateInfoDisplay('You already tried this square! Pick another one.');
        return;
    }

    if (square.classList.contains('ships')) {
        square.style.backgroundColor = 'red';
        square.classList.add('hit');
        gameState.shipsSunk++;

        if (gameState.shipsSunk === gameState.totalShips) {
            handleGameOver(true);
        } else {
            updateInfoDisplay(`Hit! You found a ship! ${gameState.totalShips - gameState.shipsSunk} ships remaining. ${gameState.maxMisses - gameState.missCount} attempts left.`);
        }
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