// create a function that takes an array and return types of the elements (data types) in a new array
//ex: arrTypes([1,3, "son",[]])-> ["number","number", "string", "object"]

function arrTypes(arr)  {
    let newArray= []
    for (let i= 0 ; i<arr.length;i++) {
        newArray[i] = typeof(arr[i])

    }
    return newArray
}
//console.log(arrTypes([1,3, "son",[]]))
//ES6 

const arrTypesNew = arr => arr.map ( x=> typeof x )
console.log(arrTypes([1,3, "son",[]]))

// the .map() method is having a function create a new array that does not modify the previous array
// the new array is a transform version of the old array