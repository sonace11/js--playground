const readlineSync = require('readline-sync');

// Initialize the game board
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Define the players
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;

// Function to print the game board
function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// Function for player 1 to place their piece
function player1Move() {
  console.log(`It's ${player1}'s turn.`);
  let row = readlineSync.questionInt('Enter row (1-3): ') - 1;
  let col = readlineSync.questionInt('Enter column (1-3): ') - 1;

  // Check if the cell is empty
  if (board[row][col] === null) {
    board[row][col] = player1;
  } else {
    console.log('That cell is already occupied. Try again.');
    player1Move();
  }
}

// Function for player 2 to place their piece
function player2Move() {
  console.log(`It's ${player2}'s turn.`);
  let row = readlineSync.questionInt('Enter row (1-3): ') - 1;
  let col = readlineSync.questionInt('Enter column (1-3): ') - 1;

  // Check if the cell is empty
  if (board[row][col] === null) {
    board[row][col] = player2;
  } else {
    console.log('That cell is already occupied. Try again.');
    player2Move();
  }
}

// Function to check if the game is won
function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== null) {
      return board[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== null) {
      return board[0][i];
    }
  }

  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) {
    return board[0][0];
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
    return board[0][2];
  }

  // Check for a tie
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        return null;
      }
    }
  }

  return 'Tie';
}

// Function to play the game
function playGame() {
  while (true) {
    printBoard();

    if (currentPlayer === player1) {
      player1Move();
    } else {
      player2Move();
    }

    let result = checkWin();
    if (result !== null) {
      printBoard();
      if (result === 'Tie') {
        console.log('It\'s a tie!');
      } else {
        console.log(`${result} wins!`);
      }
      break;
    }

    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }
}

// Start the game
playGame();