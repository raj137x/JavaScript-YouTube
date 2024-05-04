// SWITCH Statement:

// The switch statement in JavaScript is a conditional statement that allows you to execute different code blocks based on the value of an expression. 
//It's a more concise and readable alternative to using multiple if...else if...else statements when you have several conditions to check.

// # Here's how it works:

// 1. Expression Evaluation: The switch statement first evaluates an expression. This expression can be a variable, a function call, or any other valid JavaScript expression that results in a value.
// 2. Matching Cases: Then, it compares the evaluated expression's value against a series of case clauses within the switch block.
// 3. Code Execution: If a match is found between the expression's value and a case clause's value, the code block associated with that case is executed.
// 4. break Statement: After the code within the matching case is executed, a break statement (optional but recommended) is encountered, which terminates the switch statement and prevents further checking of other case clauses.
// 5. default Clause: If no matching case is found, an optional default clause can be used to specify code to be executed as a fallback option. It's similar to the else statement in an if...else chain.

// Syntax:

// switch(expression) {
//     case value1:
//       // code to be executed if expression === value1;
//       break;
//     case value2:
//       // code to be executed if expression === value2;
//       break;
//     // ... more case clauses
//     default:
//       // code to be executed if no case matches
//   }

// Key Points:

// * The switch statement performs strict comparison (===) between the expression's value and the values in the case clauses. The types must also match for a successful comparison.
// * The break statement is crucial to prevent unintended fall-through to the next case clause after a match is found.
// * The default clause is optional but provides a way to handle cases where none of the specified case values match the expression's value
  



const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}



// Important Note:

// If you don't use 'break' after a 'case' in a JavaScript switch statement, the code exhibits a behavior called "fall-through." This means:

// * Once a matching case is found, the code for that case executes.
// * However, the switch statement doesn't stop there.
// * It continues checking and executing the code for all subsequent case clauses, even if their values don't match the expression.
// * This continues until a break statement or the end of the switch block is reached.

// Here's an example to illustrate fall-through:

// let day = "Tuesday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the week!");
//     // No break here!
//   case "Tuesday":
//     console.log("Second day of the week");
//   case "Wednesday":
//     console.log("Halfway through!");
//     break;
//   default:
//     console.log("It's the weekend!");
// }

// In this example, since "Tuesday" matches a case, it will print "Second day of the week". But because there's no 'break', it will also continue to "Wednesday" and print "Halfway through!".

// To avoid this, you would add break statements after each 'case':

let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Tuesday":
    console.log("Second day of the week");
    break;
  case "Wednesday":
    console.log("Halfway through!");
    break;
  default:
    console.log("It's the weekend!");
}



