// ______________________________________________________ Array.prototype.reduce() _______________________________________________________________________________________________________________________________________________________________

// The reduce() method in JavaScript is another valuable tool for working with arrays. It allows you to iterate over an array and combine all its elements into a single value. Here's a breakdown of its usage:

// # What it Does:

// * reduce() iterates through each element in an array.

// * It takes a callback function (the reducer function) as an argument.

// * The reducer function takes two or more parameters:
// @ Accumulator: This variable holds the accumulated value from previous iterations. It's initialized with either an optional initial value you provide or the first element of the array (if no initial value is given).
// @ Current Element: This represents the current element being processed in the iteration.
// @ Optional Parameters: The reducer function can also receive the index and the original array as additional parameters.

// * The reducer function performs some operation on the accumulator and the current element and returns a new value.

// * This new value is used as the accumulator for the next iteration, effectively accumulating the results until all elements are processed.

// * Finally, reduce() returns the final accumulated value as a single output.


//# Key Points:

// * Single Output: reduce() aims to condense an array into a single value.
// * Reducer Function: Define the logic for combining elements within the reducer function.
// * Accumulation: The reducer function accumulates the results of each iteration.
// * Flexibility: The reducer function can perform various operations, such as summing elements, creating objects, or finding minimum/maximum values.

// # Example:

// const array1 = [1, 2, 3, 4];

//  0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10



// # Let's Start:

const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce( function (acc, currval) {
//     // Now I want to check what value come in Accumulator and in Currentvalue everytime
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )

// # Now let's see using Arrow function:

const myTotal = myNums.reduce( (acc, currval) => (acc + currval), 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999,
    },
    {
        itemName: 'py course',
        price: 999,
    },
    {
        itemName: 'mobile dev course',
        price: 5999,
    },
    {
        itemName: 'data science course',
        price: 12999,
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);  // Output: 22996