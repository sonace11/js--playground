const readlineSync = require('readline-sync'); //using readlinesync to be able to play the game
// declare the board of the game
let board = [
  [null,null,null ],
  [null, null, null],
  [null, null, null]
];

 for (let i = 0; i < board.length; i++) {     // use for loop state index in the array and create row and collum 
     console.log(board[i]);             // print out board
 };

const player1 = 'X';         // declare player 1 is X
 const player2 = 'O';        // declare player 2 is O
 let playerTurn = player1    // declear playerturn is player 1

 function turnPlay(){     //declare turnplay for player take turn to play the game player 1 always start
  if ( playerTurn === player1){
    playerTurn = player2;
  }else{
    playerTurn = player1
  }
 };

 function player1turn(){
  if(board[row][column]=null){
    board[row][column] = player1;
  } console.log(`It's ${player1}turn`)
 };

function winconditons (board){         //declare win function conditions if player 1 or 2 match with it in the rows on the board
  for(i = 0; i < board.length; i ++)
    if ((board[0][0],[1][0],[2][0] === 'X') || (board [0][1],[1][1],[2][1]==='X') || (board [0][2],[1][2],[2][2] === 'X')) {
      return 'the winner is player 1';
    } else if((board [0][0],[1][0],[2][0] === 'O') || (board [0][1],[1][1],[2][1] === 'O')|| (board [0][2],[1][2],[2][2] === 'O')){
      return 'the winner is player 2';
    } else if ((board [0][0],[0][1],[0][2] ==='X')||(board[1][0],[1][1],[1][2] ==='X')|| (board [2][0],[2][1],[2][2] ==='X')){
  return ' the winner is player 1';
 } else if ((board[0][0],[0][1],[0][2] ==='O')||(board[1][0],[1][1],[1][2] ==='O')|| (board[2][0],[2][1],[2][2] ==='O')){
  return ' the winner is player 2';
 } else if((board[0][0],[1][1],[2][2] === 'X')||(board [2][0],[1][1],[0][2] === "X")){
    return 'the winner is player 1';
  } else if ((board[0][0],[1][1],[2][2] === 'O')||(board [2][0],[1][1],[0][2] === 'O')){
    return ' the winner is player 2';
  } else {
    return 'this game is a draw'
  }
};


