// IF

// The 'if' statement is a fundamental control flow structure in JavaScript. It allows you to conditionally execute a block of code based on whether a certain condition is true or false.

// Here's how it work

// if (condition) {
    // code to be executed if the condition is true
//   }
  
// # Breakdown:
// * if: This keyword marks the beginning of the if statement.
// * condition: This is an expression that evaluates to either true or false. It can be a comparison, a logical operation, or any expression that results in a boolean value.
// * {}: The curly braces enclose the code block that will be executed if the condition is true.


const usUserLoggedIn = true
const temperature = 41

// if( temperature === 40 ){
// console.log("less than 50");
// } else{
// console.log("temperature is greater than 50");
// }

// console.log("Execute");


// const score = 200

// if( score > 100 ) {
//     const power = "fly"
//     console.log(`user power: ${power}`);    // OUtput: user power: fly
// }

// console.log(`user power: ${power}`);



// # shorthand notation of 'if-else' statment and it's also called ternary operators

// const balance = 1000

// if (balance > 500) console.log("test");



// # The 'else if' statement is a conditional statement used in JavaScript (and many other programming languages) to create multiple branches of execution based on different conditions.

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



// 1. The '&&' in the code you provided is the logical 'AND' operator in JavaScript. It's used for conditional execution based on multiple conditions.

// In simpler terms:

// * The && operator ensures that both conditions (userLoggedIn and debitCard) need to be true for the code to run.
// * If either userLoggedIn is false or debitCard is false, the condition will be false, and the code inside the if block won't be executed.


// 2. The '||' in the code you provided is the logical 'OR' operator in JavaScript. It's used for conditional execution based on at least one condition being true.

// In simpler terms:

// * The || operator allows either loggedInFromGoogle or loggedInFromEmail (or both) to be true for the code to run.
// * If both loggedInFromGoogle and loggedInFromEmail are false, then the condition will be false, and the code inside the if block won't be executed.


// 3. ! (NOT) - inverts the truth value of a condition (true becomes false, false becomes true).







// # In JavaScript, there are several operators specifically designed for comparing values. These comparison operators evaluate two operands (the things being compared) and return a boolean value (either true or false) based on the comparison.

//  OPERATOR    DESCRIPTION                   EXAMPLE

// (==)	        Loose equality	              1 == "1" evaluates to true (unexpected due to type coercion)

// (===)	    Strict equality	              1 === "1" evaluates to false (correct comparison)

// (!=)	        Not equal	                  10 != 10 evaluates to false

// (!==)	    Strict not equal	          10 !== "10" evaluates to true

// (>)	        Greater than	              5 > 3 evaluates to true

// (>=)	        Greater than or equal to	  5 >= 5 evaluates to true

// (<)	        Less than	                  2 < 7 evaluates to true

// (<=)	        Less than or equal to	      1 <= 1 evaluates to true



// # Choosing the Right Operator:

// * Use === for reliable comparisons where you want to ensure both value and type match.

// * Use !== when you specifically need to check if values are not equal, considering both value and type.

// * Use relational operators (>, >=, <, <=) for numerical comparisons or comparing ordered data.

// * Be cautious with == due to potential type coercion issues.

// Remember, these operators are essential for making decisions and controlling the flow of your JavaScript programs!