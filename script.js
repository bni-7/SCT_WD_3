let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameMode = '';
let isGameActive = true;

const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-btn');
const twoPlayerButton = document.getElementById('two-player');
const vsComputerButton = document.getElementById('vs-computer');

// Winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedCellIndex = Array.from(cells).indexOf(clickedCell);

    if (board[clickedCellIndex] !== '' || !isGameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    checkGameResult();
    if (gameMode === 'vsComputer' && isGameActive) {
        setTimeout(computerMove, 500); // Delay for AI's move
    }
}

function handleCellPlayed(clickedCell, index) {
    board[index] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`;
}

function checkGameResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
        isGameActive = false;
        resetButton.style.display = 'block';
        return;
    }

    if (!board.includes('')) {
        statusDisplay.innerHTML = 'Game is a draw!';
        isGameActive = false;
        resetButton.style.display = 'block';
        return;
    }

    switchPlayer();
}

function computerMove() {
    let availableCells = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    board[randomIndex] = 'O';
    document.getElementById(`cell-${randomIndex}`).innerHTML = 'O';
    checkGameResult();
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    statusDisplay.innerHTML = `Player X's turn`;
    cells.forEach(cell => (cell.innerHTML = ''));
    resetButton.style.display = 'none';
}

function startTwoPlayerGame() {
    gameMode = 'twoPlayer';
    statusDisplay.innerHTML = `Player X's turn`;
    resetGame();
}

function startVsComputerGame() {
    gameMode = 'vsComputer';
    statusDisplay.innerHTML = `Player X's turn`;
    resetGame();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
twoPlayerButton.addEventListener('click', startTwoPlayerGame);
vsComputerButton.addEventListener('click', startVsComputerGame);
