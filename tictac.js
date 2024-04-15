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
 nowPlayerTurn = player1
 function player1turn(){
  if(board[row][collum]=null){
    board[row][collum] = player1;
  } console.log(`It's ${player1}turn`)
 }




