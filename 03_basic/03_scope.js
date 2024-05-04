// # Note: In JavaScript, variable scope determines where you can access a variable within your code. There are two main types of scope:

// 1. Global Scope: 
// Variables declared outside of any function have global scope. This means they can be accessed from anywhere in your program, including inside functions and other code blocks. 
// While convenient, overuse of global variables can lead to naming conflicts and make code harder to maintain.

// 2. Block Scope: 
// Introduced with ES6 (ECMAScript 2015), block scope allows you to declare variables with a more limited reach. Variables declared using let or const keywords within curly braces {} (code blocks) 
// are only accessible within that specific block. This provides better code organization and prevents accidental modification of variables from other parts of your code.


// var c = 300

let a = 300 
if (true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a) // Output: INNER: 10
}


// console.log(a); // Output: 300
// console.log(b); 
// console.log(c);




// # Nested Scope

function one() {
    const username = "Raja";  // Declares a constant variable 'username' with the value "Raja"
  
    function two() {
      const website = "youtube";  // Declares a constant variable 'website' with the value "youtube" within the function 'two'
      console.log(username);     // Accesses the 'username' variable from the outer function 'one' and logs it to the console (In short when nested function is created the child function can access parent function's variable )
    }
  
    // Since 'website' is declared within function 'two', it's not accessible here
    // console.log(website);  // This line would result in a ReferenceError
  
    two();  // Calls the inner function 'two'
  }
  
  one();  // Calls the outer function 'one' to start the execution


 // Note: Function Calls:

// * The outer function one is called first. This starts the program's execution.
// * Inside one, the inner function two is called.
  


// Note: This same we can do in If and else because if and else also a scope

if (true) {
    const username = "Anjali";  // Declares a constant 'username' with value "Anjali" in the inner if block
  
    if (username === "Anjali") { // Inner if block checks if username is "Anjali" (it is)
      const website = "Youtube";  // Declares a constant 'website' with value "Youtube" within the inner if block
      console.log(username + website);  // Outputs "AnjaliYoutube" (concatenation)
    }
  
    // console.log(website);  // This line would cause a ReferenceError because 'website' is not accessible here
  }
  
//   console.log(username);  // This line would cause a ReferenceError because 'username' is not in the global scope
  

// Corrected Code (to avoid ReferenceErrors):

// If you want to access "username" outside of the outer "if" block, you would need to declare it in the global scope (outside of any function or code block):



// +++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5));
function addone(num){
    return num + 1

}



// Note: In this type of function declaring we can't access it before declaration

addTwo(5)    // Cause a ReferenceError
const addTwo = function(num){
    return num + 2

}
