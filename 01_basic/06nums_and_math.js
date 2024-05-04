const score = 400
console.log(score);

const balance = new Number(100) // # const balance = new Number(100) creates a new Number object with the value 100
// console.log(balance);

// console.log(balance.toString().length); // * After converting balance(new Number(100)) to "String", Now we can use string methods to number, just like we use length to
// console.log(typeof balance); # Note: In JavaScript, when you create a variable using new Number(100), you are creating a Number object, not a number primitive. The toString() method is used to convert the number object to its string representation. When you use typeof on a variable that was created as a new instance of a Number object, it will return 'object'

// console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(5)); // Output: 123.90  // The toPrecision() method formats a number to a specified length.
// console.log(otherNumber.toPrecision(3)); // Output: 123

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// # The parseInt method parses a value as a string and returns the first integer.
// let a = "33.23"
let a = "55 years"

let num = parseInt(a)
console.log(num); // Output: 55


// **************** Maths **************************

// console.log(Math);
// console.log(Math.abs(-44)); // Returns the absolute (positive) value of x.
// console.log(Math.round(4.6)); // console.log(Math.round(4.6)), is a line of JavaScript that outputs the result of rounding the number 4.6 to the nearest integer.
console.log(Math.ceil(4.2)); // Output: 5 // Rounds x up to the nearest integer.
console.log(Math.floor(4.7)); // Output: 4  // Rounds x down to the nearest integer.
// console.log(Math.min(4, 3, 2, 7, 9)); // Return the smallest value
// console.log(Math.max(3, 4, 6, 7, 2)); // Return the highest value

// # Note: The Math.random() method in JavaScript is a powerful tool for generating random numbers.
// * Functionality: The Math.random() static method returns a floating-point, pseudo-random number that falls within the range [0, 1).

console.log(Math.random());
console.log(Math.random()*10); // Return a random number between 0 (inclusive) and 10 (exclusive):
console.log((Math.random()*10) + 1); // A random whole number between 1 and 10 (inclusive):
console.log(Math.floor(Math.random()*10) + 1); // In this we use floor to get proper number not a decimal


const min = 10
const max = 20

// Note: Important Formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);











// *********************** NUMBER ********************************************************************


// # Note: In JavaScript, the Number object is a wrapper object that allows you to work with numerical values. The Number object contains methods that perform various operations on numbers. Here are some of the methods provided by the Number object:

// * toString(): Converts a number to a string.

// * toExponential(): Returns a string with a number rounded and written in exponential notation.

// * toFixed(): Returns a string with the number written with a specified number of decimals, often used for formatting money.

// * toPrecision(): Returns a string with a number written with a specified length.

// * valueOf(): Returns the primitive value of a Number object.


// # Note: Additionally, there are global JavaScript methods that can be used to convert variables to numbers:

// Number(): Converts a value to a number.

// parseFloat(): Parses a string and returns a floating point number.

// parseInt(): Parses a string and returns an integer.

// These methods are useful for various tasks like converting strings to numbers, formatting numbers, and performing calculations with precision


// ******************** MATH *********************************************************************************************************************************************************************************************


// # Note: Certainly! JavaScript provides a Math object that allows you to perform various mathematical tasks on numbers. Let’s explore some of the commonly used methods and properties from the Math object:

// 1. Math Constants (Properties):

// * Math.E: Returns Euler’s number (approximately 2.71828).

// * Math.PI: Returns the value of π (approximately 3.14159)

// * Math.SQRT2: Returns the square root of 2.

// * Math.SQRT1_2: Returns the square root of 1/2.

// * Math.LN2: Returns the natural logarithm of 2.

// * Math.LN10: Returns the natural logarithm of 10.


// 2. Rounding Methods:

// * Math.round(x): Rounds a number x to the nearest integer.

// * Math.ceil(x): Rounds x up to the nearest integer.

// * Math.floor(x): Rounds x down to the nearest integer.

// * Math.trunc(x): Returns the integer part of x.


// 3. Other Useful Methods:

// * Math.sign(x): Returns the sign of x (negative, zero, or positive).

// * Math.pow(x, y): Returns x raised to the power of y.

// * Math.sqrt(x): Returns the square root of x.

// * Math.abs(x): Returns the absolute (positive) value of x.

// * Math.sin(x): Returns the sine of the angle x (in radians).

// * Math.cos(x): Returns the cosine of the angle x (in radians).