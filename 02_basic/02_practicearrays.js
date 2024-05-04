const marvel_heros = ["Ironman", "Thor", "Spiderman",]
const dc_heros = ["Batman", "Flash", "Superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // output: [ 'Ironman', 'Thor', 'Spiderman', [ 'Batman', 'Flash', 'Superman' ] ]
// console.log(marvel_heros[3][1]); // output: Flash

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // Output: [ 'Ironman', 'Thor', 'Spiderman', 'Batman', 'Flash', 'Superman' ]

// # Note: The spread syntax (...) in JavaScript offers several advantages when working with arrays:

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// 1. Combining Arrays: spread syntax is a concise way to create a new array by combining elements from existing arrays. It eliminates the need for loop-based concatenation or methods like concat().

const number1 = [1, 2, 3, 4]
const number2 = [5, 6, 7, 8]
const combineNumber = [...number1, ...number2] // output: [ 1, 2, 3, 4,5, 6, 7, 8]

// 2.  Copying Arrays (Shallow Copy): Spread syntax provides a quick way to create a shallow copy of an array. The new array will contain references to the original elements, not copies of the elements themselves. This is useful when you want a new array that reflects the current state of the original array but don't want to modify the original directly.

const fruits = ["apple", "mango", "cherry"]
const copiedFruits = [...fruits]

// 3. Adding/Removing Elements: Spread syntax can be used within array literals to add or remove elements at specific positions. You can combine it with other elements to create a new array with the desired modifications.

// * Adding Elements at Specific Positions: Spread syntax allows you to insert new elements at specific positions within a new array. Here's how it works:

const colors = ["red", "green", "blue"]

// Add "pink" at index 2

const updatedColors = [
  ...colors.slice(0, 2),  // Include elements before index 2 (red, green)
  "pink",               // Insert the new element
  ...colors.slice(2)     //  extracts elements from index 2 (inclusive) onwards, resulting in ["blue"].
];

console.log(updatedColors); // Output: ["red", "green", "pink", "blue"]


// * Adding Elements to the End: To add elements to the end of an array, you can leverage the existing elements and then add the new elements after them using spread syntax.

const numbers = [1, 2, 3]

// Add 4 and 5 to the end
const extendedNumber = [ ...numbers, 4, 5]
console.log(extendedNumber); //  // Output: [1, 2, 3, 4, 5]


// * Removing Elements: While spread syntax itself cannot directly remove elements from an existing array, it can be combined with array methods like slice() to achieve removal within a new array.

const letters = ["a", "b", "c", "d", "e"]
const filterLetters = [
    ...letters.slice(0,2),   // Elements before index 2 (a, b)
    ...letters.slice(3)     // Elements after index 2 (d, e)
]

console.log(filterLetters);  // Outputs: ["a", "b", "d", "e"]


// Note: Create a new array from a nested array, effectively flattening it into a single-level array.

const nested_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]
const resultNested_array = nested_array.flat(Infinity) // output: [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

console.log(resultNested_array);



// 1. Array.isArray()
// Note: The Array.isArray() method returns true if an object is an array, otherwise false.

const another_fruits = ["Dragonfruit", "Lichi"]
const resultAnother_fruits = Array.isArray(another_fruits)  // Output: True
console.log(resultAnother_fruits);

console.log(Array.isArray("X.com")); // output: False


// 2. The Array.from() method in JavaScript provides a versatile way to create a new array from various iterable objects or array-like objects. It offers flexibility and can be used in different scenarios.

// * Converting Array-like Objects to Arrays:

const another_number = [1, 2, 3, 4]  // Already an array
const newArray = Array.from(another_number) // Creates a new array copy

const text = "Hello"
const Char = Array.from(text)   // Creates an array of characters ['H', 'e', 'l', 'l', 'o']
// console.log(Char);

const myset = new Set([5, 6, 7])  // This line creates a new constant variable named setArray. It uses the Array.from() method to convert the contents of mySet (which is the Set object) into a new array.

const setArray = Array.from(myset)  //  Creates an array from the Set elements // outut: [ 5, 6, 7 ]


// * Creating an Array with a Specific Length and Default Value: Array.from can be used to create an array of a desired length filled with a default value:

const defaultArray = Array.from({length: 5}, ()  => 0)
console.log(defaultArray);

// * Array Transformation with mapFunction

const number = [1, 2, 3]
const doubledArray = Array.from(number, x => x * 2)
console.log( doubledArray);


// # The Array.of() method in JavaScript is a convenient way to create a new array from a variable number of arguments.

const score1 = 123
const score2 = 456
const score3 = 789

console.log(Array.of(score1, score2, score3));