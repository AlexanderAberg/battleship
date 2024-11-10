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

// Sizes of the ships
const shipSizes = {
    destroyer: 2,
    submarine: 3,
    cruiser: 3,
    battleship: 4,
    carrier: 5
};

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
        square.classList.remove('ships', 'hit', 'miss', 'missed-ship');
    }

    // Show the victory board
    document.querySelector('.victory-board').style.display = 'flex';

    // Update score display
    document.getElementById('victory').textContent = gameState.victories;
    document.getElementById('defeat').textContent = gameState.defeats;

    // Hide ship placers
    const shipPlacers = document.querySelectorAll('.ship-placer div');
    for (let shipPlacer of shipPlacers) {
        shipPlacer.style.display = 'none';
    }
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

    // Ship placement
    const shipElements = document.querySelectorAll('.ship-placer div');
    for (let shipElement of shipElements) {
        shipElement.addEventListener('dragover', preventDefault);
        shipElement.addEventListener('drop', placeShip);
    }
}

// Prevent default drag behaviour
function preventDefault(e) {
    e.preventDefault();
}

// PlaceShip function
function placeShip(e) {
    const shipElement = e.target;
    const shipName = shipElement.id;
    const shipSize = parseInt(shipElement.getAttribute('data-size'));

    const squares = document.getElementsByClassName('square large');
    let placed = false;

    for (let i = 0; i < squares.length && !placed; i++) {
        const square = squares[i];
        if (!square.classList.contains('ships')) {
            square.classList.add('ships');
            square.textContent = shipName;
            square.style.backgroundColor = 'black';

            // Place the ship horizontally
            for (let j = 0; j < shipSize; j++) {
                if (!square.classList.contains(`ship-${j}`)) {
                    square.classList.add(`ship-${j}`);
                }
            }

            placed = true;
        }
    }

    if (!placed) {
        alert(`Couldn't place ${shipName}. Not enough space.`);
    } else {
        updateInfoDisplay(`Placed ${shipName} successfully.`);
    }
}

// Start the game
function startGame() {
    gameState.isGameStarted = true;
    gameState.ships = placeShips();
    updateInfoDisplay(`Find all 5 ships! You have ${gameState.maxMisses} attempts.`);
    showShips();
}

// Place ships randomly on the board
function placeShips() {
    const squares = document.getElementsByClassName('square');
    const shipPositions = [];

    for (const [shipName, size] of Object.entries(shipSizes)) {
        let placed = false;
        while (!placed) {
            const startIndex = Math.floor(Math.random() * squares.length);
            const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';

            if (canPlaceShip(squares, startIndex, size, direction)) {
                placeShipOnBoard(squares, startIndex, size, direction, shipName);
                shipPositions.push({
                    name: shipName,
                    positions: getShipPositions(startIndex, size, direction)
                });
                placed = true;
            }
        }
    }

    return shipPositions;
}


function canPlaceShip(squares, startIndex, size, direction) {
    const width = 10;

    for (let i = 0; i < size; i++) {
        const index = direction === 'horizontal' ? startIndex + i : startIndex + i * width;
        if (index >= squares.length || squares[index].classList.contains('ships')) {
            return false;
        }
        if (direction === 'horizontal' && startIndex % width + size > width) {
            return false;
        }
    }
    return true;
}

function placeShipOnBoard(squares, startIndex, size, direction, shipName) {
    const width = 10;
    for (let i = 0; i < size; i++) {
        const index = direction === 'horizontal' ? startIndex + i : startIndex + i * width;
        squares[index].classList.add('ships', shipName);
    }
}

function getShipPositions(startIndex, size, direction) {
    const positions = [];
    const width = 10;
    for (let i = 0; i < size; i++) {
        const index = direction === 'horizontal' ? startIndex + i : startIndex + i * width;
        positions.push(index);
    }
    return positions;
}

// HandleSquareClick function
function handleSquareClick(event) {
    if (gameState.gameOver) {
        updateInfoDisplay('Game is over! Click New Game to play again.');
        return;
    }

    const square = event.target;

    if (square.classList.contains('hit') || square.classList.contains('miss')) {
        updateInfoDisplay('You already tried this square! Pick another one.');
        return;
    }

    if (square.classList.contains('ships')) {
        square.style.backgroundColor = 'red';
        square.classList.add('hit');

        const hitShip = gameState.ships.find(ship => ship.positions.includes(Array.from(squares).indexOf(square)));
        if (hitShip) {
            const allHit = hitShip.positions.every(pos => squares[pos].classList.contains('hit'));
            if (allHit) {
                gameState.shipsSunk++;
                updateInfoDisplay(`You sank the ${hitShip.name}! ${gameState.totalShips - gameState.shipsSunk} ships remaining.`);
            } else {
                updateInfoDisplay(`Hit! You found a part of a ship! ${gameState.totalShips - gameState.shipsSunk} ships remaining.`);
            }
        }

        if (gameState.shipsSunk === gameState.totalShips) {
            handleGameOver(true);
        }
    } else {
        square.style.backgroundColor = 'black';
        square.classList.add('miss');
        gameState.missCount++;

        if (gameState.missCount >= gameState.maxMisses) {
            handleGameOver(false);
        } else {
            updateInfoDisplay(`Miss! ${gameState.maxMisses - gameState.missCount} attempts remaining. Find ${gameState.totalShips - gameState.shipsSunk} more ships.`);
        }
    }
}

// Handle game over
function handleGameOver(isVictory) {
    gameState.gameOver = true;
    if (isVictory) {
        gameState.victories++;
        document.getElementById('victory').textContent = gameState.victories;
        updateInfoDisplay('Congratulations! You found all ships! Click New Game to play again.');
    } else {
        gameState.defeats++;
        document.getElementById('defeat').textContent = gameState.defeats;
        updateInfoDisplay('Game Over! Out of attempts! Click New Game to try again.');

        // Reveal remaining ships
        const squares = document.getElementsByClassName('square');
        for (let square of squares) {
            if (square.classList.contains('ships') && !square.classList.contains('hit')) {
                square.className = 'square missed-ship';
            }
        }
    }
}

// Update info display
function updateInfoDisplay(message) {
    const infoDisplay = document.getElementById('info-display');
    infoDisplay.textContent = message;
}