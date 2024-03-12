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

function onlyInterger(arr) {
  let interger = []
  for(let i = 0; i < arr.length; i++) {
    if(Number.isInteger(arr[i])){
    interger.push(arr[i])
}
  }
 return interger
}
console.log(onlyInterger(['son', 6, 'ben', 5, 9]))
// array is zero base index

//SECTION - write a function that takes an array with numbers and return an array with the elements multipled by 2
// arrayByTwo([2,5,4]) ->[4,10,8]

function arrayByTwo(arr) {

    for(i = 0; i< arr.length; i++) {
        arr[i] *=2
    }
    return arr
}

console.log(arrayByTwo([2,5,4]))
// one line
const onelineArray = (arr) => arr.map(el => el *2)
console.log(onelineArray([2,5,4]))