// create a function that takes an array and return types of the elements (data types) in a new array
//ex: arrTypes([1,3, "son",[]])-> ["number","number", "string", "object"]

// function arrTypes(arr)  {
//     let newArray= []
//     for (let i= 0 ; i<arr.length;i++) {
//         newArray[i] = typeof(arr[i])

//     }
//     return newArray
// }
//console.log(arrTypes([1,3, "son",[]]))
//ES6 

// const arrTypesNew = arr => arr.map ( x=> typeof x )
// console.log(arrTypes([1,3, "son",[]]))

// the .map() method is having a function create a new array that does not modify the previous array
// the new array is a transform version of the old array

//create a function that takes 2 -D arrays and returns the sum on min values in each row
/*
ex: sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15] ]
)
output -> 1+6+11 = 18

*/

// function sumMinArrays(arr){
//     let sumTotal = 0;

//     for(let i =0; i < arr.length; i++ ) {
//     let y = arr[i][0]
    
//     for ( let x =0; x<arr[i].length; x++ ) {
//     if (y > arr[i][x]) {
//         y = arr[i][x];
//     }
// }
// sumTotal += y
// }
// return sumTotal
// }
// console.log(sumMinArrays([
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
//  ])) 


// //ES6 
// const sumMinArraysNew = arr => arr.reduce((a,b) => a + Math.min(...b),0)
// console.log(sumMinArrays([
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
//  ])) 

 // create a function that takes an array, return duplicate numbers in new array.
 // ArraysDuplicateNumbers([1,2,3,4,5,6,5,1]) output -> [5,1]

 
 //ES6 a function that show what numbers is dup in the array 

//  const ArraysDuplicateNumbers = arr => (
//     arr= [...new Set([...arr.filter(num =>
//         arr.indexOf(num) !== arr.lastIndexOf(num)
//     )])].sort((a,b) => a-b),
//     arr.length ? arr: null
//  )
//  console.log(ArraysDuplicateNumbers([5,1,2,3,4,5,6,1]))

//create a function that take an array of numbers of letters and return a string.
//arrayToString([6,7"sonny",10])->""

// function arrayToString(arr) {
//     let  result = ""
//     for(let i=0; i< arr.length; i++) {
//         result = result + arr[i]
//     }
//     return result 
// }

// console.log(arrayToString([6,7,"Ali","Sonny",10]))

// create a function that takes an array with numbers, transform that array into a mirror.
// arrayToMirror([0,2,4,6,8]) output -> [0,2,4,6,8,6,4,2,0]
// ES5

// function arrayToMirror(arr) {
//     for(let i = arr.length - 2; i >= 0; i --) {
//         arr.push( arr[i])
//     }
//     return arr
// }
//  console.log(arrayToMirror([0,2,4,6,8]))

 //ES6
//  const toMirror = arr => [...arr,...arr.reverse(1)];

//  console.log(toMirror([0,2,4,6,8]))
 // create a function that returns the total number of arrays inside a given main array.
 //totalofArrays([[1,2,3],[4,5,6]]) -> total number of arrays = 2

//  function totalofArrays(arr) {
//     let count = 0
//     for(let i = 0; i< arr.length; i++) {
//         if(Array .isArray(arr[i])) {         //array .isArray checking true or false, if true the => will work 
//             count++
//         }
//     }
//     return count++
//  }
//  console.log(totalofArrays([[1,2,3],[4,5,6]]))

 // create a function that takes a number as an argument and returns an array of numbers
 //counting down from the given number to zero

 //Ex: arrayCountDown(5) output -> [5,4,3,2,1,0]

 function arrayCountDown(num) {
    let array = []
    for(let i =num; i >=0; i-- ) {
    array.push(i) 
    }
    return array 
 }
 console.log(arrayCountDown(5))

 //ES6
 const countDownArray = (num) => Array.from(Array(num+2).keys()).reverse()
 console.log(countDownArray(10))