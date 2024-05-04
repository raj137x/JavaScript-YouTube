// const user = {
//   username: "Raja",
//   price: 999,

//   welcomeMessage: function () {
//     // The primary purpose of "this" in this code is to enable you to use the properties (like username) of the specific object that the function is called on. This allows for dynamic behavior based on the object's data.
//     console.log(`${this.username}, welcome to website`); // here "this" keyword use to make "current context", which mean "this" use to access variable in this scope
//   }
// };

// # First Call (user.welcomeMessage()):
// user.welcomeMessage() // output: Raja, welcome to website

// # Changing Username (user.username = "Anjali"):
// user.username = "Anjali"

// # Second Call (user.welcomeMessage()):
// user.welcomeMessage() // output: Anjali, welcome to website

// Key Points:

// * const prevents accidental reassignment of the entire user object.
// * Individual properties like username can still be modified.
// * this inside the function refers to the current object's context, allowing the function to use the updated username value in the second call.




const user = {
    username: "Salman",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcom to website`);
        console.log(this);
    }
}

// user.welcomeMessage() // Outpu: Salman, welcom to website
                     // {
                     //   username: 'Salman',
                     //   price: 999,
                     //   welcomeMessage: [Function: welcomeMessage]
                     // }

// console.log(this); // output: {}, in this output our current context is empty "{}" object, because currently we are in Node evvirnoment and when we are in node environment our "this" refer empty object because currently there is no context n the global
 




// function chai(){
//     console.log(this);
// }

// chai()



// function chai(){
//     let username = "Shahrukhkhan"
//     console.log(this.username);   // Note: In this case, this.username still won't work because the function is called directly, and there's no username property on the object itself.
// }

// chai() // output: undefined





// Note: Arrow Function:

// Arrow functions, introduced in ES6 (ECMAScript 2015), offer a concise syntax for writing JavaScript functions. They provide several advantages over traditional function expressions, including:
// * Improved readability: Arrow functions can simplify code, especially for short functions, making your code easier to understand.
// * Lexical this binding: Unlike regular functions, arrow functions inherit the this value from the enclosing scope, which can be helpful when dealing with event listeners or callback functions.

// Key characteristics of arrow functions:

// 1. Concise syntax: Arrow functions use a => instead of the function keyword and curly braces. For single-line functions, the return statement is implicit.
// * Implicit return: If the function body consists of a single expression, the expression's result is implicitly returned.
// * No arguments object: Arrow functions don't have their own arguments object. You can use the rest parameter (...) to capture arguments as an array.
// * Lexical this: The value of this within an arrow function is determined by the surrounding context, not how the function is called.

// 2. Use cases for arrow functions:

// * Callback functions: Arrow functions are well-suited for callback functions because they maintain the this context of the surrounding code.
// * Concise function definitions: When you have short functions, arrow functions can improve code readability by reducing verbosity.

// 3. Things to keep in mind:

// * Arrow functions cannot be used as constructors or with the yield keyword.
// * They don't have access to the arguments object or the super keyword.



// const chai = function(){
//     let username = "Raja"
//     console.log(this.username); // Here our output is came "undefined"
// }


// this is our Arrow function:
// const chai = () => {
//     let username = "Raja"
//     console.log(this.username);

// }

// chai()


// # Basic syntax of Arrow function:
// we hold this arrow function in a variable

// Important Note:

// # With curly braces ({}):

// * Required: If you define a function body with curly braces, you must use the return keyword to explicitly specify the value the function returns.
// * Multiple statements: Curly braces allow you to write multiple statements within the function body. You can use return statements at different points to control what value is returned.

// # Without curly braces ({}):

// * Implicit return: When a function is defined with a single expression and no curly braces, the expression's result is implicitly returned. You don't need to write return explicitly.
// * Conciseness: This syntax is useful for short, single-line functions where you want to write concise code.


// # With curly braces:

function add(x, y) {
    const sum = x + y;
    return sum; // Required with curly braces
  }
  
  const result = add(5, 3);
  console.log(result); // Output: 8


// # Without curly braces:

// const multiply = (x, y) => x * y; // Implicit return

            //    OR    Both are correct

const multiply = (x, y) => (x * y);            

// const multiply = (x, y) => ({username: "Raja Sekh"});

const product = multiply(4, 3);
console.log(product); // Output: 8





// Note: Arrow functions provide a concise way to write JavaScript functions. Here's the syntax breakdown:

// 1. Basic Structure:

// (parameters) => { function body }

// // 2. Simple Arrow Function (Implicit Return):

// const add = (x, y) => x + y;
// console.log(add(5, 3)); // Output: 8


// // 3. Arrow Function with Explicit Return:

// const multiply = (a, b) => {
//     return a * b;
//   };
//   console.log(multiply(4, 2)); // Output: 8
  



