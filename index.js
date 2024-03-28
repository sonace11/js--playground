// let primes = [2,3,5,7]
// function sum(array) {
//     let sum = 0;
//     for(let x of array ) {
//         sum += x;
//     }
//     return sum;
// }
// console.log(sum) 

// create a function that takes two numbers and a math operator(+,-,/,*) and will perform a cacultation 
// with the given numbers. 
// cal (2, "+", 3) the out put is 5

// function calNum( num1 , operator, num2 ){
//     if(operator == '+') return num1+num2 
//     if(operator == '-') return num1-num2
//     if(operator == '*') return num1*num2
//     if(operator == '/' && num2 !=0 ) return num1/num2
//     else return " can not divide by 0!"
// }
// console.log(calNum(5, "/", 0))

// // use Switch()
// function calNum3(num1 , operator, num2 ){
//     switch(operator) {
//         case '+': 
//        return num1 + num2 
        
//         case '-':
//        return  num1- num2
        
//         case '*':
//         return num1 * num2
//         break;
//         case '/':
//          if(num2 === 0 ) return "can  not divide by 0!"
//          return num1/num2 

//          default: return false
//          break;
//     }
        
// }
// console.log(calNum3(4,"*",5))


// // ES6
// const calNum2 = (num1, operator, num2) => operator+ num2 === "/0" ? "can not divide by 0!" : eval(num1+operator+num2)
// console.log (calNum2( 5, "+", 5 )) 

// // create an array rotate the values clockwise by one
// // the last value is going to be the first value 
// // rotateArray ([20,15,26,22,30]) -> [30,20,15,26,22] 

// function rotateArray(arr){
//   let lastValue = arr.pop()
//   arr.unshift(lastValue)
//   return arr
// }
// console.log(rotateArray([20,15,26,22,30]))

// const rotateArray2 = arr => (arr.unshift(arr.pop()), arr)

// console.log (rotateArray2([20,15,26,22,30]))

// create function that takes a given date( 26/3/2024 ) return the day of the day of the week
// as string assume that week start on Sunday.

// function getDayName(day){
//     const days = ['Sunday','Monday','TUesday','Wednesdday','Thursday','Friday']
//     let date = new Date()
//     return days [date.getDay()]
// }
// console.log(getDayName(3/26/2024))

// //ES6
// const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us',{ weekday: 'long'})
// console.log(getDayNameTwo("2024-03-26"))

//create a function that can take a flat array and change it to a nest arrays to repersent 
//an incremental depth level.

// Ex: nestArray ([1,2,6,3]) ->[1,[2[6,3]]]

// function nestArray (arr) {
//  if(arr.length == 1) return arr 
//  let temp = []
//  for(let i = 0; i< arr.length; i++) 
//  return [arr[0],nestArray(arr.slice(1))] 

// }
//                                         // this ES5 function is broken 
// console.log( nestArray[1,2,3,4])

// const nestArray3 = arr => arr.length === 1 ? arr : [arr[0], nestArray3(arr.slice(1))]
// console.log(nestArray3([1,2,3]))

//create a funtion that takes two dates and return the number of days between the first 
// and second date.

/*getNumbers(
  new Date("March 26 2024"),
  new Date("march 30 2024 ")
) */
// output -> 4days


//ES6
const getDays = (date1, date2 ) => {
    return new Date(date2 - date1 ).getDate()-1
}
console.log (getDays (
    new Date("March 26 2024"),
    new Date("march 30 2024 ")
     ))

// create a function that takes an array of stringified numbers as prarameter and the return an of numbers 
// Ex : ["1","3","6.7"] -> [1,3,6.7]

//ES6
//  let arrayToNumbers = arr => arr.map( e => +e)

//  console.log(arrayToNumbers(["1","3","6.7"]))

 //ES5

 function arrayToNumbersTwo( arr) {
    let temp = []
    for (let i = 0; i < arr.length; i ++) {
        temp [i] = JSON.parse(arr[i])
    }
    return temp
 }

console.log(arrayToNumbersTwo(["1","3","6.7"]))
