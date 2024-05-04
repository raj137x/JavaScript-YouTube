// Note: The provided function calculateCartPrice(num1) only returns the first argument (num1) and ignores any subsequent arguments passed to the function. This is why you only see the output 200 when calling calculateCartPrice(200, 400, 800).

// Here's a breakdown of the code:

// *The function calculateCartPrice takes a single argument named num1.
// *Inside the function, it simply returns the value of num1.
// *In the console.log statement, you're passing three arguments (200, 400, and 800) to the function. However, since the function is designed to handle only the first argument, it only considers 200 and returns that value.

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 800,)); // Output: 200


// Note: This version uses the "rest parameter or Operator" syntax (...args) to collect all the arguments passed to the function into an array

function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(200, 400, 500)); // Output: [ 200, 400, 500 ]



function calculateCartPrice3(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice3(200, 400, 500)); // Output: [500], because val1 take out 200 and val2 take out 400



// # Note: Pass and use object in function

// 1. Function Definition:

// * The code defines a function named handleObject.
// * The function takes a single parameter named anyobject. This parameter can hold any object that's passed to the function when it's called.

// 2. Object Access and Logging:
// # Inside the handleObject function:
// * It uses template literals with backticks () to create a formatted string.
// * Within the template literal, it accesses the object's properties using dot notation:
// * anyobject.username retrieves the username value.
// * anyobject.price retrieves the price value.
// * The function logs this formatted string to the console using console.log.

// 3. Function Call:
// * The code calls the handleObject function and passes the user object as an argument.

const user = {
    ussername: "Raj",
    price: 199
}

function handleObject(anyobject){
console.log(`username is ${anyobject.ussername} and price is ${anyobject.price}`);
}

handleObject(user) // output: ussername is Raj and price is 199

// we can directly pass the object
handleObject({
    ussername: "Anjali",          // OUtput: ussername is Anjali and price is 399
    price: 399
})



// Note: Pass the "Array" in function

// 1. Function Definition:

// * The code defines a function named returnSecondValue.
// * The function takes a single parameter named getArray. This parameter is intended to hold an array when the function is called.

// 2. Accessing and Returning Second Element:

// # Inside the returnSecondValue function:
// * It accesses the second element of the array passed as the argument using getArray[1]. In JavaScript, arrays are zero-indexed, so the first element is at index 0, the second element is at index 1, and so on.
// * The function uses the return statement to return the value at index 1 of the array passed to the function.

// 3. Function Call and Output:

// * The code calls the returnSecondValue function and passes the myNewArray as an argument.
// * Since myNewArray[1] is 400, the function returns 400.
// * The result (400) is then passed to console.log and printed to the console.

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // Output: 400

// Directly pass the array
console.log(returnSecondValue([200, 400, 600, 800])); // output: 400
