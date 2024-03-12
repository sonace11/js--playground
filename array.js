//SECTION - -JavaScript Arrays

//NOTE -  - Array are a specail type of objects that can accessed through numbers from zero up to N - 1
// let arr = []

// arr = ['Son', 1, 'orange',100]
// console.log(arr[2])
// // note - push() pop()
// // section - push () adding a new item to the end of the an array.
// arr.push('Joe')
// console.log(arr)

// //SECTION -  - pop() removes an item from the end of array 

// let lastItem = arr.pop()
// console.log(lastItem)
// console.log(arr)


// //ANCHOR -  - JavaScript for loop, the best way to iterate any array mathemathical through a for loop.
// console.log(arr.length)

// for(let i = 0; i<arr.length; i++){
// console.log(i, arr[i])
// }

// //SECTION - add and item to the beginning of an array
// arr.unshift('apple')
// console.log(arr)

// //NOTE - Remove an item from the beginning of an array.
// let firstItem = arr.shift()
// console.log(firstItem)
// console.log(arr)

// //ANCHOR - JavaScript Iterators
// let a = [-5, -4 , -3]
// let b = 0
// let c = [ 12,13,14]

// //NOTE - concat () method which is used to join two or more arrays.
// let result = a.concat(b,c)
// console.log(result)

let numbers = [2,4,7,8,9,]

let isEven = (num) => {
  if (num % 2 == 0) {
     console.log(num + 'is even number') 
    return
  } else {
     console.log( num + 'is odd number') 
    return false
  }
}

console.log(isEven(numbers))
// .every() is a filter for checking datas false or true
console.log(numbers.every(isEven))
// .some()
console.log(numbers.some(isEven))

for(let j = 0; j < numbers.length; j++) {
    let temp = numbers[j]
   if ( temp % 2 ==0) {
    console.log(temp + 'is even number')
    } else {
        console.log(temp + ' is an odd number')
    }
   }

