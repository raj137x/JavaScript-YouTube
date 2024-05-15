// for loop

// # The for loop in JavaScript is a fundamental construct used to execute a block of code repeatedly a certain number of times. It's particularly useful when you know beforehand how many 
// iterations you need.

// Here's the basic syntax of a for loop:

// for (initialization; condition; increment/decrement) {
//     // code to be executed
//   }

// # Let's break down each part:

// 1. Initialization: This expression is executed only once before the loop starts. It's typically used to declare a loop counter variable.
// 2. Condition: This expression is evaluated before each iteration of the loop. If it returns true, the loop body executes. If it returns false, the loop terminates.
// 3. Increment/Decrement: This expression is executed after each iteration of the loop body. It's commonly used to update the loop counter variable. 

// Here's an example of a for loop that prints the numbers from 1 to 5:

// for (let i = 1; i <= 5; i++) {
//     console.log(i); 
//   }


  // In this example:

// * let i = 1 initializes the counter variable i to 1.
// * i <= 5 is the condition that checks if i is less than or equal to 5.
// * i++ increments i by 1 after each iteration.

// # Without i++:

// * Infinite Loop: Since there's no increment step to update the loop counter i, the condition i <= 5 will always be true as long as i remains 1.
// * Constant Output: The code inside the loop body (console.log(i)) will continuously print the value of i (which is always 1), resulting in an infinite loop that keeps printing "1".

// This loop will print: 1 2 3 4 5 

// # Things to keep in mind:

// * You can omit any of the expressions in the for loop construct, but semicolons are still required. An omitted expression is treated as true for the condition and not executed for initialization/increment/decrement.
// * You can use a different variable name than i for the counter.
// * The for loop can be nested inside other loops for more complex iterations.

// JavaScript also offers other loop constructs like for...of for iterating over iterable objects (like arrays) and for...in for iterating over object properties. These have different use cases compared to the basic for loop.




// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }
    // output: 1 2 3 4 5 6 7 8 9 10


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
      console.log("5 is the best number");
    }
    console.log(element);
    
}
 // output: 1 2 3 4  '5 is the best number'  5 6 7 8 9 10


// # Explanation of this, is available in the 'iterations_Notes.txt'

 for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);


    // both console.log are same in first we use backtic and in another we not use backtick

    // console.log(`${i} * ${j} = ${i*j}`);    
    // console.log(i + '*' + j + ' = ' + i*j );
  }
  
 }



 let myArray = ["flash", "batman", "superman"]
 console.log(myArray.length); // Output: 3

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
  
}
   // Output: flash batman superman. Reason: we got this three output "flash batman superman" because we know that array index is start from '0', that's why we use 'less than (<)' in between index and myArray.length
                                  //  if we put <= in between them then we get Output: flash batman superman undefined.


   //___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________                               

  // # 'break' and 'continue' are control flow statements that alter the normal execution flow of the loop.

// Break:

// @ Terminates the loop: When encountered within a loop, break immediately exits the loop entirely, regardless of whether the loop's condition is still true.
// * The code following the loop's closing curly brace (}) will then be executed.


// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   const element = index;
//   console.log(`value of i is ${element}`);
  
// }



// Continue:

// @ Skips the current iteration: When encountered within a loop, continue skips the remaining code within the current iteration of the loop and jumps back to the beginning of the next iteration.
// * The loop's condition is then re-evaluated to determine if another iteration should occur.


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  const element = index;
  console.log(`value of i is ${element}`);
  
}

                   