// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Raj"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Raj"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => flase
// "Raj" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************************** Operation ***********************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2**3 => 2 to the power 3
// console.log(2%2);

//    # Adding Strings
let str1 = "Hello"
let str2 = " Raj" // we give space before Raj because when we add string it not combine together
let str3 = str1 + str2
console.log(str3);

//   # Complex Situtation
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

// console.log(+true); // not preferable operation
// console.log(+""); // not preferable operation

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
    // # Increment (++)
gameCounter++; // postfix operator
++gameCounter; // prefix operator
console.log(gameCounter);