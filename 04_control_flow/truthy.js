// In JavaScript, truthy and falsy refer to how certain values are evaluated in a Boolean context. Here's the breakdown:

// # Truthy: These values are coerced into true when used in conditions or Boolean checks. They include:

// * true (of course!)
// * Numbers other than zero (positive or negative)
// * Non-empty strings (including strings with spaces)
// * Arrays and objects (even empty ones)
// * Functions

// # Falsy: These values are coerced into false in Boolean contexts. They include:

// * false (as expected)
// * 0 (zero)
// * "" (empty string)
// * null (no value assigned)
// * undefined (variable declared but not assigned)
// * NaN (Not a Number)

// Essentially:

// * Truthy values are like "something there" and evaluate to true.
// * Falsy values are like "nothing there" and evaluate to false.

// # Why care?

// Truthy and falsy are important because JavaScript uses them in various situations, such as:

// * Conditional statements: if statements, while loops, etc., use truthy/falsy to determine which code to run.
// * Logical operators: && (AND) and || (OR) rely on truthy/falsy for evaluation.
// * Default values: If a variable is undefined, you might check for its truthiness and assign a default value.

// Example:

// let num = 10; // truthy!
// if (num) {
//   console.log("num is truthy!");
// }

// let str = ""; // falsy!
// if (str) {
//   console.log("str is truthy!"); // This won't run
// }




const userEmail = "Raj@6174x.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// # Falsy values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// # Truthy values:

// empty array [], empty object {}, (non-empty string) "0" or "false" or " ", function(){} 


// How to check empty array:

let userName = []

if (userName.length === 0) {
    console.log("Array is empty");
}


// How to check empty object:

let emptyObject = {}
// Object.keys(emptyObject), this whole thingh will return array.
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}






// Nullish Operator:

// # The nullish coalescing operator (??) is a relatively new addition to JavaScript (introduced in ES2020). It provides a concise way to handle null and undefined values.

// # Here's how it works:

// * The operator takes two operands: a left operand and a right operand.
// * It evaluates the left operand.
// * If the left operand is null or undefined, the operator returns the right operand.
// * Otherwise, the operator returns the left operand itself.

// Example:

// let name = userName || "John"; // Uses logical OR

// let fullName = userName ?? "Default Name"; // Uses nullish coalescing

// console.log(name); // Output: John (if userName is null or undefined)
// console.log(fullName); // Output: Default Name (if userName is null or undefined)

// # Key Points:

// * The nullish coalescing operator only checks for null and undefined. Other falsy values (like 0, "", false) are not considered nullish.
// * It has lower precedence than the logical OR (||) operator. Use parentheses for proper evaluation order if needed.


let val1;
// val1 = 5 ?? 10 // output: 5
// val1 = null ?? 10 // OUtput: 10
// val1 = undefined ?? 15 // Output: 15
// val1 = null ?? 10 ?? 30 // Output: 10


console.log(val1);






// Terniary Operator

// The ternary operator, also called the conditional operator, is a shortcut for writing an 'if...else' statement in a single line of code. It's a compact way to express conditional logic.

// Structure:

// condition ? expression_if_true : expression_if_false

// * condition: This is an expression that evaluates to either true or false.
// * expression_if_true: This expression is executed if the condition is true.
// * expression_if_false: This expression is executed if the condition is false.

// How it Works:

// 1. The condition is evaluated.
// 2. If the condition is true, the expression_if_true is evaluated and its result becomes the overall result of the ternary operator.
// 3. If the condition is false, the expression_if_false is evaluated and its result becomes the overall result of the ternary operator.

// Example:

let age = 25;
let isAdult = age >= 18 ? "You are an adult" : "You are not an adult";

console.log(isAdult); // Output: "You are an adult"



const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")