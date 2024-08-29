// Create the game board
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Function to print the board
function printBoard() {
    for (let i = 0; i < 9; i += 3) {
        console.log(board.slice(i, i + 3).join(' | '));
        if (i < 6) console.log('---------');
    }
}

// Function to make a move
function makeMove(index) {
    if (index < 0 || index > 8 || !Number.isInteger(index)) {
        console.log("Invalid move. Please enter a number between 0 and 8.");
        return;
    }
    
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        printBoard();
        if (checkWin()) {
            console.log(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            console.log("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            console.log(`It's ${currentPlayer}'s turn.`);
        }
    } else {
        console.log("Invalid move. This cell is already occupied or the game has ended.");
    }
}

// Function to check for a win
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

// Initialize the game
console.log("Welcome to Tic Tac Toe!");
console.log("Use numbers 0-8 to make your move.");
console.log("The board is numbered as follows:");
console.log("0 | 1 | 2");
console.log("---------");
console.log("3 | 4 | 5");
console.log("---------");
console.log("6 | 7 | 8");
console.log("\nLet's begin! X goes first.");
printBoard();

// To make a move, call makeMove(index) in the console
// For example: makeMove(4) to place your mark in the center
makeMove(4)
makeMove(2)
makeMove(3)
makeMove(6)
makeMove(5)