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