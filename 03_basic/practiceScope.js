
let a = 400
if (true){
    let a = 10 // let a = 10;: This line declares a variable named a and assigns the value 10 to it. The let keyword is used for variables that are local to the code block where they are declared. This means a can only be accessed within the if block.

    const b = 20 // const b = 20;: This line declares a constant named b and assigns the value 20 to it. Constants cannot be reassigned a new value after declaration. Similar to a, b is also local to the if block.

    var c = 30 // In JavaScript, the var keyword has function-level scoping, which means variables declared with var are accessible throughout the entire function where they are declared, even outside of the code block where they are declared.


    // console.log("Inside: ", b); // Ouptu: 20, because it declare inside the "if" block
}

// console.log(a)
// console.log(c); //Output: 30 , the variable c is declared with var inside the if block. However, because of function-level scoping, it can still be accessed outside the block.

// console.log(a); // output: 400, because let a = 400 is declare outside the "if" block







// Nested scope in function:

// function one() {
//     const username = "Raja";
  
//     function two() {
//       const website = "youtube";
//       return website;
//     }
//     // Return an object with username and website from two()
//     return { username, website: two() };
//   }
  
//   const userData = one(); // Call one to get the object
//   console.log(userData.website); // Access website using property destructuring
  

  function one() {
    const username = "Raja";
  
    function two() {
      const website = "youtube";
      console.log(website);
      console.log(username)
    }
    two()
    
  }
  one()
  


  if(true){
    const username = "Anjali"

    if(username === "Anjali"){
        const website = "Youtube"
        
        // const userObject = {username, website};
        // console.log(userObject); // Output: { username: 'Anjali', website: 'Youtube' }

        // const Combine = username + "-" + website
        // console.log(Combine); // Output: Anjali-Youtube

        const Combined = `${username} ${website}`
        console.log(Combined); // Ouptut: Anjali Youtube
    }
    
  }


  // ++++++++++++++++++++++++++++++++++++++++++++++ Interseting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // 1.  Function Declaration (addone):

// * Uses the function keyword followed by the function name, parentheses for parameters, and curly braces for the function body.
// * Hoisting: Function declarations are hoisted to the top of their scope (usually the script or function in which they are defined). This means you can call addone before its actual definition in the code.

// Example:
console.log(addone(5)); // This will work (hoisting)
function addone(num) {
  return num + 1;
}


// 2.  Function Expression (addTwo):

// * Assigns a function to a variable using the anonymous function syntax (const addTwo = function(num) {...}) or arrow function syntax (const addTwo = (num) => {...}).
// * Not hoisted: Function expressions are not hoisted. You cannot call addTwo before its definition in the code.

// Example:

// This will throw an error because addTwo is not defined yet
console.log(addTwo(5));

const addTwo = function(num) {
  return num + 2;
}

