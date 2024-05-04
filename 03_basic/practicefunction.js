function username(){
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("I");
}

username()

// function twoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// twoNumber(3, 2) // Output: 5
// twoNumber(3, "3", 4) // Output: 33

function thirdNumber(number0, number1){
    let num = number0 + number1
    return num
}
console.log(thirdNumber(7 ,2));

function userLoginMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }

    return `${username} just loggedin`
}

console.log(userLoginMessage("Raj"));
console.log(userLoginMessage());


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400)); // output: 200


function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(200, 300, 400)); // output: [ 200, 300, 400 ]


function calculateCartPrice3(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice3(200, 300, 400, 600, 700, 800)); // output: [ 400, 600, 700, 800 ]



// pass object in funciton

const myObject = {
    name: "Anjali",
    age: 17
}
function handleObject(anyobject){

    return `my name is ${anyobject.name} and I am ${anyobject.age} year old`
}

console.log(handleObject(myObject));

console.log(handleObject({
    name: "Raja",
    age: 18
}));


// pass array in function

const myNewArray = [123, 234, 345, 456]

function returnThirdValue(anyArray){
    return anyArray[2]
}
console.log(returnThirdValue(myNewArray)); // output: 345

console.log(returnThirdValue([567, 678, 789,987]));






// Important Note:

// # Function Declaration (First Function):

// function username() {
//     console.log("Raja");
//   }
  
//   username(); // output: Raja
  
// Explanation:

// * Declaration: The "function" keyword is used to declare a function named "username".
// * Function Body: The code block enclosed in curly braces "{}" defines the function's behavior. In this case, it simply logs the string "Raja" to the console.
// * Hoisting: Function declarations are hoisted to the top of their scope (usually the script). This means you can call "username()" even before it's declared in the code.


// # Function Expression (Second Function):

// const username = function() {
//     console.log("anjali");
//   };
  
//   username(); // Output: anjali


// Explanation:

// * Expression: The function is assigned to a constant variable named username. This creates an anonymous function (without a name).
// * Function Body: Similar to the first function, the code block defines the function's behavior, logging "anjali" to the console.
// * No Hoisting: Function expressions are not hoisted. You cannot call username() before it's defined and assigned to the variable.


// # Key Differences:

// 1. Declaration vs. Expression:

// * Function declaration: A formal way to define a function, separate from any variable assignment.
// * Function expression: An anonymous function assigned to a variable.

// 2. Hoisting:

// * Function declaration: Hoisted to the top of their scope, allowing calls before definition.
// * Function expression: Not hoisted, must be defined before calling.

// 3. Naming:

// * Function declaration: Can have a name or be anonymous.
// * Function expression: Always anonymous (assigned to a variable).


// When to Use Which:

// * Use function declarations when you want to define a function that can be called before its definition (due to hoisting).
// * Use function expressions when you need to create an anonymous function or when you want to assign the function to a variable for later use.