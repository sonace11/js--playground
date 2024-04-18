let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  function placePiece(row, col, symbol) {
      if (board[row][col] === null) {
          board[row].splice(col, 1, symbol);
          return true; // Piece placed successfully
      } else {
          return false; // Position already occupied
      }
  }
  
  // Example usage:
  console.log("Initial board:");
  for (let i = 0; i < board.length; i++) {
      console.log(board[i]);
  }
  
  // Player X places their piece at row 0, column 0
  console.log("Player X places their piece at row 0, column 0:");
  if (placePiece(0, 0, 'X')) {
      for (let i = 0; i < board.length; i++) {
          console.log(board[i]);
      }
  } else {
      console.log("Position already occupied.");
  }
  
  // Player O places their piece at row 1, column 1
  console.log("Player O places their piece at row 1, column 1:");
  if (placePiece(1, 1, 'O')) {
      for (let i = 0; i < board.length; i++) {
          console.log(board[i]);
      }
  } else {
      console.log("Position already occupied.");
  }
  