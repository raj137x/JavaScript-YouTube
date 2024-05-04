// array

// # Note: An array in JavaScript is a versatile data structure that allows you to store and organize multiple values within a single variable.

const myArr = [0, 1, 2, 3, 4]
const myHeors = ["Ironman","Batman"]

const myArr2 = new Array(1, 2, 3, 4) // Old method to creates a new array object using the new Array()

// console.log(myArr[0]); //The value inside the brackets[] acts as an index, which specifies the position of the element you want to retrieve. In this case, 0 is the index for the first element in the array. Arrays are zero-indexed, meaning counting starts from 0, not 1.

// console.log(myArr[1]); // Inside the parentheses, it uses square bracket notation [] to access a specific element within the array myArr.


// Array Mthhods

// Note: The push() method adds new items to the end of an array
// myArr.push(5)
// myArr.push(6)
// myArr.push(7)

// myArr.pop() // remove the last element from array

// myArr.shift() // remove the first element from array

// myArr.unshift(8) // insert new element in the begging of array

// console.log(myArr.includes(9)); // The includes() method checks if a specific element exists within the array and returns true if it finds the element, otherwise false.

console.log(myArr.indexOf(2)); // If 2 exists in myArr, this will return the index (position) of 2 in the array, which is 2 in this case (arrays start indexing from 0). If 2 is not found, the method returns -1.
// console.log(myArr.indexOf(9));

const newArr = myArr.join() // The JavaScript Array join() Method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(,).

console.log(myArr); 
console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Note: Importantly, slice does not modify the original array.
console.log(myn1);


console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // Note: splice modifies the original array, myArray is now altered.
console.log(myn2);

console.log("C ", myArr);


// Note here for Slice and Splice:

// Use slice when:

// You want to create a copy of a portion of an array without modifying the original array.

// You need to extract a specific section of the array for further processing.

// You want to avoid accidentally modifying the original array.


// Use splice when:

// You want to modify the original array by removing, replacing, or inserting elements.

// You need to remove elements from the array and potentially capture them in a new array.

// You want to insert new elements into the array at a specific position











// JavaScript Array Methods for Notes:
// JavaScript provides a rich set of built-in methods for working with arrays. These methods allow you to manipulate, iterate over, and transform array elements efficiently. Here's a summary of some common array methods:

// 1. Adding and Removing Elements:

// .push(element): Appends a new element to the end of the array and returns the new length.

// .pop(): Removes the last element from the array and returns it.

// .unshift(element): Inserts a new element at the beginning of the array and returns the new length.

// .shift(): Removes the first element from the array and returns it.


// 2. Iterating over Elements:

// .forEach(callback): Executes a provided function once for each array element.

// .map(callback): Creates a new array with the results of calling a function on every element in the original array.

// .filter(callback): Creates a new array with all elements that pass a test implemented by the provided function.


// 3. Searching and Finding Elements:

// .indexOf(element): Returns the first index at which a given element can be found in the array, or -1 if it's not found.

// .lastIndexOf(element): Returns the last index at which a given element can be found in the array, or -1 if it's not found.

// .find(callback): Returns the value of the first element that satisfies a test implemented by the provided function.

// .findIndex(callback): Returns the index of the first element that satisfies a test implemented by the provided function, or -1 if it's not found.


// 4.  Other Useful Methods:

// .concat(array1, array2, ...): Merges two or more arrays and returns a new array.

// .slice(start, end): Extracts a section of an array and returns a new array.

// .splice():  It allows you to remove elements, replace existing elements, or insert new elements at a specific position within the array.

// .join(separator): Converts all array elements into a string, separated by the specified separator (e.g., comma).

// .sort(compareFunction): Sorts the array elements in place (ascending by default, or using a custom compare function).