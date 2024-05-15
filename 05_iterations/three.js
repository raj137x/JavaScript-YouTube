// In JavaScript, iterating refers to the process of going through a collection of elements one by one, typically to perform some action on each element. 
// It's like examining each item in a box, one at a time.

// There are two key concepts involved in iterating:

// 1. Iterables: These are special types of objects in JavaScript that you can loop through to access their elements in a sequential order. Common iterables include:

// * Arrays: Ordered lists of values (like your box of items).
// * Strings: Sequences of characters.
// * Maps: Collections of key-value pairs.
// * Sets: Collections of unique values.


// 2. Iteration (Looping): This is the actual process of going through an iterable object using a loop construct in JavaScript. There are several loop types, but the most 
// common for iterating over collections is the for...of loop:

// Example:

// const colors = ["red", "green", "blue"];

// for (const color of colors) {
//     console.log(color); // Prints "red", "green", "blue"
// }

// # In this example:

//  * colors is the iterable object (the box).
//  * The for...of loop is the iteration construct (the process of examining each item).
//  * Inside the loop, color acts as a variable that holds the current element (the item being examined) during each iteration.

// # Benefits of iterating:

// !. Iterating allows you to process each element in a collection efficiently.

// 2. It makes code more concise and readable compared to manually accessing elements by index.

// 3. You can use iterating for various purposes, such as:
// * Printing all elements in a list.
// * Modifying each element in an array.
// * Filtering elements based on certain criteria.
// * Performing calculations on each element.

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// for of loop:

// ["", "", ""]   these are 'empty strings' inside the 'arry'

// [{}, {}, {}] these are 'objects' inside the 'array'


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


//  Maps:

// # Map Object:

// * A Map object is a collection of key-value pairs. Unlike traditional objects, keys in a Map can be of any data type, including objects, primitives (strings, numbers, etc.), or even functions.
// * Keys in a Map must be unique, meaning you can't have the same key twice.
// * Map objects remember the order in which key-value pairs were inserted. This allows you to iterate over the map entries in the same order they were added.

const maps = new Map()
maps.set('IN', "India")
maps.set('USA', "United State of America")
maps.set('Fr', "France")

// console.log(maps); 

// for (const key of maps) {
//     console.log(key);
// }     
// Output:    [ 'IN', 'India' ]
        //    [ 'USA', 'United State of America' ]
        //    [ 'Fr', 'France' ]


// We need a separate value from 'maps', for getting separate value we use "[key, vlaue]" this is a type of array destructuring

for (const [key, value] of maps) {
    console.log(key, ':-', value);
}
// Output: IN :- India
        // USA :- United State of America
        // Fr :- France


// Note: In JavaScript, objects won't iterate directly using a for...of loop. We discussed in "four.js" file
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

