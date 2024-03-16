// function greeting () {
//     return console.log('hello world!')
// }

// console.log(greeting())

//NOTE - write a function that adds any two numbers and return the result 

// function count (a,b){
    
//     return a+b
// }
// console.log(count(4,2))
// write a function that takes an array check whether the sum of it ellement is even or odd, the value should return "even" or "odd"

// function checkArraySum(arr){
// let sum = 0
// for ( i=0; i < arr.length; i++) {
//     sum += arr[i]
//     // sum = sum + arr[i]
// }
// if(sum%3 == 0){
//     return 'even'
// } else {return 'odd'}
// }

// console.log(checkArraySum([3,4,3]))

//SECTION - write a function that an array of item and return only intergers.
// ['son', 6, 'ben', 5, 9] -> [6,5,9]

// function onlyInterger(arr) {
//   let integer = []
//   for(let i = 0; i < arr.length; i++) {
//     if(Number.isInteger(arr[i])){
//     integer.push(arr[i])
// }
//   }
//  return integer
// }
// console.log(onlyInterger(['son', 6, 'ben', 5, 9]))
// array is zero base index

//SECTION - write a function that takes an array with numbers and return an array with the elements multipled by 2
// arrayByTwo([2,5,4]) ->[4,10,8]

// function arrayByTwo(arr) {

//     for(i = 0; i< arr.length; i++) {
//         arr[i] *=2
//     }
//     return arr
// }

// console.log(arrayByTwo([2,5,4]))
// // one line
// const onelineArray = (arr) => arr.map(el => el *2)
// console.log(onelineArray([2,5,4]))

// create a function which takes two strings (p1 and p2) as argruements and returns a string 
// stating the winner (rock, paper or scissors)

//NOTE - game condition 
// if p1 wins return the string "the winner is P1"
// if p2 wins return the string "the winner is p2"
// if they are the same then return "it's a draw "

function rps(p1,p2) {
  if(p1 === p2) return 'Its a draw'

  else if(p1 === 'rock' && p2 === 'scissors') return 'the winner is p1'
  else if (p1 === 'paper' && p2 === ' rock') return ' the winner is p1'
  else if (p1 === 'scissors'&& p2 === 'paper') return ' the winner is p1'

  else return 'the winner is p2'
}
// console.log(rps('scissor','paper'))

//ANCHOR - ES6 Javascript.
function rpsTwo(p1,p2){
  let obj = {
     rock: 'scissors ',
     scissors: 'paper',
     paper: 'rock' 
  }
  return p1 === p2 ? "It's draw":  obj[p1]  === p2 ? "the winner is p1": "the winner is p2"
}
//  console.log(rpsTwo('paper','rock'))

 //ANCHOR - JS built in function includes ()

 function rpsThree (p1,p2) {
  const wins = ['rockScissors', 'PaperRock', 'ScissorsPaper']
/* p1 === p2 is for checking fault or true, 
.includes also prove false or truth and also bring the varible from the string 

*/
  return p1 === p2 ? "it's a draw" : `the winner is ${ wins.includes(p1+p2) ? 'p2' : 'p1'}`
 }

 console.log(rpsThree('paper','rock'))
 