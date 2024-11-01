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