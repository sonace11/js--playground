// create a function that count integer numbers of digit
// ex: intercount(303) -> 3
// intecount(1500) -> 4

    
    const countDigits = (int) => {
        return (int.toString()).length
    }
    console.log(countDigits(-303456))
    //number of numbers in a given number
    //negative numbers
    /* transform each number into + number, turn into a string split and count the array leangth to return the number of numbers
    */
   // 1. find the absolute value of number passed in the function and set that to variable
   // 2. turn the number into string 
   // 3. return the length of numbers
   function intCount(n){
    let positive = Math.abs(n)
    let numString = positive.toString 
    return numString.length 
   }
    console.log(intCount(-303456))

    const digiCount = (n) => {
        if(Number.isInteger(n)){
            if(n>0){
                let digits = 1
                while(n >10){
                    digits ++
                    n/= 10
                }
                return digits
            } else if ( n <0){
                let digits = 1
                while( n< -10 ){
                    digits++ 
                    n/= 10;
                }
                return digits
            }else {
                return 1
            }
        }
    }
    console.log(digiCount(-30345607))

    // 1. create a function that takes an array of int as an argument and returns the same array in ascending order using 
    // sort() method
    //2. you have to sort the array creating ES5 own algorithum.

    function ascending (array){
         array = array.sort(function(a,b){
            return a - b;
        }
    );
    return array
    }

    console.log(ascending([44,88,2,9,20]))

let arr1 = [4,9,20,41]
for(let i =0; i<5;i++){

}
// create a function that takes a string and returns the first character that repeats. if there is no repeats of a character then return -1

function repeatChar(chars){
for(let i =1; i < chars.length; i++){                   // use for loop to read the string and start with index 1
    if (chars.slice(0,i).includes(chars[i])){         // condition if chars index 0 and 1 , then include char.i which is L and carry till meet a
        return chars[i]                                 // include is determine whether or not a string includes another string.
    }
}
return '-1';
}

console.log(repeatChar('pikachu motr'))

function repeatCharacter(String) {
    let result = null
    let explodedString = String.split("");
    console.log(explodedString);
    for(let i = 0; i<explodedString.length; i++) {
        letterToCheck = explodedString[i];
        let characterCounter = 0;                                 // this code dont work
        for(let j = 0; j<explodedString.length; j++) {
            if(letterToCheck == explodedString[j]) {
                characterCounter++
            }
        }
        if(characterCounter > 1) {
            return letterToCheck
        }
    }
    return -1
}
 
console.log(repeatCharacter("allegory"))

const checkLettter = (letter) => {
    for ( let i =1; i < letter.length; i++ ){
      return letter.slice(0,1).includes(letter[i]) ? letter[i] : '-1';           //this code is fail
    }
}
console.log(checkLettter('mega mummy'))

// create a funtion that reverse letters in a string but keeps the numbers in their current order 'jkl15mn923o' -> 'omn5lk923'

function numbers(n){
    return n >= '0' && n <= '9'
};

function resvereWord (str){
    let temp = []
   for ( let i = 0; i < str.length; i ++){
    if( !numbers(str[i])){
        temp.push(str[i])
    }
   }
   let result = ''
   for ( let i =0; i < str.length; i++){          // not sure it work or not
    if( !numbers(str[i])){
        result += temp.pop();
    } else {
        result += str[i];
    }
return result
   }
}

console.log(resvereWord('howto124keepup'))

// write a function to rotate an array either left or right
// according to a number provided inthe function 

/* 
sampleArray([0,1,2,3,4,5,7,8,9],2) -> [7,9,0,1,2,3,4,5]
*/
// kayden work
function rotateArray( arr,num){
    let result = arr
    for(let i =0; i<num; i++){
        let firstNumber = arr.pop()
        arr.unshift(firstNumber)
        result = arr
    }
    return result
}
console.log(rotateArray([1,2,3,4,5,6],2))

//ES6
const arrRotate = (a,n) => [...a.slice(-n % a.length),...a.slice(0,-n % a.length)]
console.log(arrRotate([1,2,3,4,5,6],2))

//create a funtion that takes an array of values, removes all dupicate values, removes all duplicate values and returns a new 
// in the same order as the old array (only strings and numbers)

function readArray(arr){
    let newArray = [];
    for(let i =0; i < arr.length;i++){
        if(newArray.indexOf(arr[i]) === -1 ){
           newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(readArray([1,2,3,'son',4,'monday',5,6]))

// create a function that takes 3 collections of arguments and returns the sum of the product of numbers.
// add the result of the first number in each collection then multipled together to the result of the second number in each collection 
// example: product(1,2)(1,1)(2,3) -> 1*1*2 + 2*1*3 = 8

function product(num1,num2){
return (num3,num4) => {
    return (num5,num6)=> {
return (num1*num3*num5) + (num2*num4*num6)
    }
}
}
console.log(product(1,1)(1,2)(2,3))

//ES6
const productTwo = (num1,num2) => (num3,num4) => (num5,num6) => (num1*num3*num5) + (num2*num4*num6)
console.log(productTwo(1,1)(1,2)(2,3))
// my version
//  function takeThree([]){
//     for(let i =0; i< [].length; i++){
//         for(let j=0; j< [i].length;j++){               not finish 
//             let relsut = 
//         }
//     }
//  }

// create a function that takes an array of strings and return an array, sorted from shortest to longest strings 
// stringsort(['ali','kahwaiji','nmit'])-> ['ali','nmit','kahwaji']

//ES6
const stringsSort = arr => arr.sort((a,b) => a.length - b.length)
console.log(stringsSort(['ali','kahwaiji','nmit']))

// write a function that sum up all the values in the array
// addArray([1,2,3,4,10,11]) -> 31

function addArrayFred (arr){
    let sum = 0
    for(let i =0; i< arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(addArrayFred([1,2,3,4,10,11]))

