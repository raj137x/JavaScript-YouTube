const myArr = [1, 2, 3, 4, 5]

const myArr2 = [5, 6, 7, 8, 9]

// console.log(myArr[2])
// console.log(myArr[4])

// # Arrays Method

// myArr.push(9) // .push() method add new item at the end of the array
// myArr.push(55)

// myArr.unshift(4) // .unshift() method add new item at the begging of the array

// myArr.pop() // .pop() method remove item at the end of the array

// myArr.shift() // .shift() method remove item at the begging of the array

console.log(myArr); 

console.log(myArr.includes(9)); // the includes() method check the specification element is exist in a array, if its exist then it return "true" otherwise it return "flase"

console.log(myArr.indexOf(3)); // indexOf() method will return the index of the element in the array, 


let fruits = ["apple", "banana", "mango"];
let fruitsString = fruits.join("-") // The join() method in JavaScript is used on arrays to combine all the elements of the array into a single string. 
console.log(fruitsString);
console.log(typeof fruitsString);



// Slice and Splice

const otherFruits = ["Mango", "Banana", "Apple", "Orange", "Kiwi", "Cherry"]

// Extract elements starting from index 1 (banana) to index 4 (kiwi, not including kiwi)
const sliceotherFruits = otherFruits.slice(1, 4)

console.log(otherFruits); // Output: [ 'Mango', 'Banana', 'Apple', 'Orange', 'Kiwi', 'Cherry' ]

console.log(sliceotherFruits); // Output: [ 'Banana', 'Apple', 'Orange' ]



const color = ["red", "green", "blue", "purple", "yellow"]

// Remove 2 elements starting from index 1 (green)
const removeColor = color.splice(1, 2); // removedColors will be ["green", "blue"]

console.log(color); // Output: ["red", "purple", "yellow"] (original array modified)

// Add a new element "pink" at index 2
color.splice(2, 0, "Pink")
console.log(color); // Output: ["red", "purple", "pink", "yellow"]