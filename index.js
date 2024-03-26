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

function calNum( num1 , operator, num2 ){
    if(operator == '+') return num1+num2 
    if(operator == '-') return num1-num2
    if(operator == '*') return num1*num2
    if(operator == '/' && num2 !=0 ) return num1/num2
    else return " can not divide by 0!"
}
console.log(calNum(5, "/", 0))

// use Switch()
function calNum3(num1 , operator, num2 ){
    switch(operator) {
        case '+': 
       return num1 + num2 
        
        case '-':
       return  num1- num2
        
        case '*':
        return num1 * num2
        break;
        case '/':
         if(num2 === 0 ) return "can  not divide by 0!"
         return num1/num2 

         default: return false
         break;
    }
        
}
console.log(calNum3(4,"*",5))


// ES6
const calNum2 = (num1, operator, num2) => operator+ num2 === "/0" ? "can not divide by 0!" : eval(num1+operator+num2)
console.log (calNum2( 5, "+", 5 )) 
