// Immediately Invoked Function Expressions (IIFE)

// In JavaScript, an Immediately Invoked Function Expression (IIFE, pronounced "iffe") is a function that executes as soon as it's defined.  While it might seem unusual, IIFEs offer some advantages for your code.

// # Here's how IIFEs work:

// 1. Function Definition: You start by creating a function, either anonymous or named.
// 2. Function Expression: Wrap the function in parentheses to turn it into a function expression.
// 3. Immediate Invocation: Add another set of parentheses right after the function expression and follow it with parentheses with closing curly braces. This tells JavaScript to invoke the function immediately.

// # Syntax Breakdown:

// (function() {
   // Function body here
// })();

// # Benefits of IIFEs:

// * Local Scope: Variables declared within the IIFE are local to the function and won't pollute the global scope, preventing naming conflicts with other variables in your code.
// * Module Pattern: IIFEs can be used to create modules, encapsulating variables and functions within a specific namespace.
// * Data Privacy: By keeping variables private within the IIFE, you can control how they are accessed and modified.
// * Code Organization: IIFEs can help organize your code by grouping related functionality within a self-contained unit.


// Note: Sometime problems occur due to global scope pollution, so for preventing global scope variables or declaration pollution we used "IIFE".

// # Named IIFEs: You can give the function a name, but it's primarily used for readability within the IIFE itself, as the name isn't accessible outside the function:
(function chai(){
    console.log(`DB CONNECTED`);

})(); //  both the semicolon and parentheses are essential for the IIFE syntax to function correctly.


// # Anonymous IIFEs: These are the most common type. The function itself doesn't have a name:
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('Raja');




// _________________________________________________ PRACTICE _________________________________________________________________________________________________________________________________

(function code () {
    console.log("Hello World");
}) ();

// function bodmas (num1, num2, num3){
//     return num1 + num2 * num3
// }

// const result = bodmas (2, 3, 4)
// console.log(result);

( function() {
    const num1 = 2;
    const num2 = 4;
    const num3 = 5;
    const result = num1 + num2 * num3
    console.log(result);
}) ();


( (name) => {
  console.log(`Hello World I am ${name}`);
} ) ("Raj")


