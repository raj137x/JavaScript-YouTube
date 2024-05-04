// In JavaScript, functions are essentially reusable blocks of code that perform specific tasks. They are fundamental building blocks that allow you to organize your code, improve readability, and prevent repetition.

// 1. Defining a Function:

// * You create a function using the function keyword followed by a name (chosen by you) and parentheses.
// * Inside the parentheses, you can optionally specify parameters (inputs) that the function can receive.
// * The function's body is enclosed in curly braces {} and contains the code that the function will execute.

// 2. Calling a Function:

// * To use a function, you call it by its name followed by parentheses.
// * If the function takes parameters, you provide the values within the parentheses when calling it.


function sayMyName(){   
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
}
sayMyName()



// function addTwoNumbers(number1, number2){  // "addTwoNumbers()" is a definition of a "function" and when we take any input inside the prantheses of a function definition it's called "Parameters". Parameters can be a number, string, etc..

//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // Output : 7 // when we call a function and whatever value we pass inside it's called "Argument"

// addTwoNumbers(3, "4") // Output: 34


// # Note: When we do "Return" Value, then we store function name in variable and we can print it


function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 // Calculates the sum of the two arguments and returns the result.
}

const result = addTwoNumbers(3, 5) // Calls the addTwoNumbers function with the arguments 3 and 5 and stores the returned value (8) in the variable result.
 
// console.log("Result:", result); // Prints the value stored in the variable result (which is 8) to the console.



function loginUserMessage (username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
return `${username} just logged in`
}

console.log(loginUserMessage("Raja Sekh")) // Output: Raja Sekh just logged in
console.log(loginUserMessage()) // Output: undefined just logged in




// Note: In JavaScript, the return statement serves a crucial purpose within functions. Let’s explore its significance:

// 1. Terminating Execution:
// * When a return statement is encountered inside a function, it immediately stops the execution of that function.
// * The function will not proceed further beyond the return statement.

// 2. Returning a Value:
// * The primary use of return is to specify the value that the function should produce as its final result.
// * When the interpreter reaches a return statement, the function ends, and the specified value is returned to the context where the function was called.

// 3. Example:

// function multiply(x, y) {
//     // Calculate the product
//     const product = x * y;
  
//     // Return the product
//     return product;
//   }
  
//   // Call the function and store the returned value
//   const result = multiply(5, 3);
  
//   console.log(result); // Output: 15

// 4. Additional Notes:
// * The return statement can only be used within function bodies.
// * If you omit the value after return, it returns undefined.




let val1 = 10
let val2 = 5
function addnumber(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addnumber(val1, val2)
let result2 = addnumber(12, 8)

console.log(result1, result2);