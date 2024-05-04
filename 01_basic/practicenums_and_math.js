let score = 300
// console.log(score);
// console.log(typeof score);
// let scoreStr = String(score)
// console.log(typeof scoreStr);

let number = 200
// console.log(number.toString());
// console.log(typeof number);

// let num = new String(344)
// console.log(typeof num);

// const numb = new Number(433) // In modern JavaScript, it's generally recommended to directly assign numbers to variables without using the new Number() constructor. This is simpler and more efficient.
const numb = 433

// console.log(numb.toString());
// console.log(typeof numb);

let numString1 = "123abc";
let numString2 = "-4.5";
let numString3 = "0xff"; // Assuming radix 16 (hexadecimal)

// Note: "parseInt" Can optionally take a second argument (radix) specifying the base (between 2 and 36) for interpreting the number (e.g., radix 16 for hexadecimal).

// console.log(parseInt(numString1)); // Output: 123 (extracts only the integer part)
// console.log(parseInt(numString2)); // Output: -4 (ignores the decimal)
// console.log(parseInt(numString3, 16));  // Output: 255 (interprets "ff" as 255 in hexadecimal)

// Note: "ParseFloat" can't optionally take a second argument (radix)

// console.log(parseFloat(numString1)); // Output 123
// console.log(parseFloat(numString2)); // Output -4.5
// console.log(parseFloat(numString3)); // Output 0


let anotherNumber = 567.3345
// console.log(anotherNumber.toExponential()); // Output: 5.673345e+2  // The toExponential() method converts a number into an exponential notation.

// console.log(anotherNumber.toFixed(3)); // output 567.334 (rounds to three decimal places)
// console.log(anotherNumber.toFixed(1)); // output 567.3 (rounds to one decimal place)
// console.log(anotherNumber.toFixed(0)); // output 567 (rounds to the nearest integer)
// console.log(anotherNumber.toFixed(6)); // output 567.334500 (pads with zeros)



let num1 = 46.658

// The toPrecision() method formats a number to a specified length. A decimal point and nulls are added (if needed), to create the specified length.

// console.log(num1.toPrecision(3)); // Output 46.6
// console.log(num1.toPrecision(7)); // Output 46.65800


// **************************** Math ****************************************************************

console.log(Math);
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.SQRT2);