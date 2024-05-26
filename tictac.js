const readlineSync = require('readline-sync');         // using readline sync to able interact with the game as user
// declare the board of the game
let board = [ 
 [null, null, null],
 [null, null, null],
 [null, null, null]
 ];

function printoutBoard(){
 for (let i = 0; i < board.length; i++) {     // use for loop state index in the array and create row and collum 
     console.log(board[i]);             // print out board
 }
};
printoutBoard();                           // call out printoutboard function to print the board

 const player1 = 'X';         // declare player 1 is X
 const player2 = 'O';         // declare player 2 is O
 let playerTurn = player1       // declare playerTurn varible as player 1 to start and can change to player 2 later

 function turnPlay(){     //declare turnplay for player take turn to play the game. Player 1(X) always start then after player 1(X) its player 2(O)
  if ( playerTurn === player1){
    playerTurn = player2;
  }else{
    playerTurn = player1
  }
 };

 
 function placepiece(row, column) {
    if (row >= 0 && row <= 2 && column >= 0 && column <= 2 && board[row][column] === null) {  // add in the condition if row are more and equal 0 also less or equal 2 (this allow players can only place row from 0 to 2)
      board[row][column] = playerTurn;                                                        // with collumn also more and equal with 0 and less and equal with 2 (this allow players can only place column from 0 to 2) 
                                                                                              //then row and column of the board are cells of null
    turnPlay(); // Switch player turn
      printoutBoard(); // Print the updated board
    } else{ 
      console.log(' this move is not valid, please try again');                            // if the move are not part of the conditon it will print this move is not valid, please try again
      playGame();
      printoutBoard();
    }
  }
  
 function draw (){                             // create function draw
  for(let i =0; i < board.length; i++){                 // use for loop to read the arrays
    for( let j =0; j < board[i].length; j++){            // use a nest for loop inside the other for loop to read the cell of the array
      if(board[i][j] === null){                        // declare condition that if all the cells are null then its false
        return false
      }
      }
    }
    return true                                   // return the conditon as true
  }




 function playGame(){
  let row = readlineSync.questionInt(`player ${playerTurn}, enter the row (0-2): `)                    //using readline.sync.questionInt for user to put integer as input for the game
  let column = readlineSync.questionInt(`player ${playerTurn}, enter the column (0-2): `)            // for row and column, player only use number between 0 - 2                                                                           // invoke placepiece function into rungame funtion 
 placepiece(row,column);
 winconditons(board);
};
 playGame()                                                      // calling playgame function to play the game 

function winconditons (board){         //declare win function conditions and check columns for  player 1 or 2 pieces 
  if((board[0][0] =='X' && board[1][0] =='X' && board[2][0]=='X') || (board[0][1] =='X' && board[1][1] == 'X' && board[2][1] == 'X')||(board[0][2]=='X' && board[1][2]=='X' && board[2][2]=='X')){
    console.log('the winner is player 1');
  } else if (
    (board[0][0] =='O' && board[1][0] =='O' && board[2][0] =='O') || (board[0][1] =='O' && board[1][1] == 'O' && board[2][1] =='O')||(board[0][2] =='O' && board[1][2] =='O' && board[2][2] =='O')){
    console.log ('the winner is player 2');
  } else if(                          // check rows for player 1 and 2 pieces
    (board[0][0] == 'X' && board[0][1] =='X' && board[0][2]=='X') || (board[1][0] =='X' && board[1][1] =='X' && board[1][2]=='X')||(board[2][0]=='X' && board[2][1]=='X' && board[2][2]=='X')){
       console.log (' the winner is player 1');
    } else if(
      (board[0][0] == 'O' && board[0][1]=='O'&& board[0][2]=='O') || (board[1][0]=='O' && board[1][1]=='O' && board[1][2]=='O') ||(board[2][0]=='O' && board[2][1]=='O' && board[2][2]=='O')){
        console.log ('the winner is player 2');
      } else if(                      // check diagnal of the board for player 1 and 2 pieces
        (board[0][0]=='X'&& board[1][1]=='X' && board[2][2]=='X') ||(board[2][0]=='X' && board[1][1]=='X' && board[0][2]=='X')
      ){
        console.log ('the winner is player 1')
      }else if(
        (board[0][0]=='O'&& board[1][1]=='O' && board[2][2]=='O')||(board[2][0]=='O' && board[1][1]=='O' && board[0][2]=='O')
      ){
        console.log ('the winner is player 2')
      }else if(draw()){                                     // call the draw function in the else af statement, if the no more cell as null left then the draw will be flase
        console.log('this game is a draw');                 // print out this game is a draw
      } else {
      playGame()                                           // if none the condition are meet, then just keep playing game 
      }
      }
       