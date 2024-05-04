//  # Primitive Datatype

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

const bigNumber = 234543546354253535n
// console.log(bigNumber);




// # Refernece (Non Primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Batman", "Thor"] // this is "Array" datatype

let myObj = {   // This is "Object" datatype
    name: "Raj",
    age: 22,
}

const myFunction = function(){     // This is "Function" datatype
    console.log("Hello World");
}



// **************************************************************************************

// In javaScript we have two types of Memory: 'Stack and Heap'

// * In 'primitive' datatype "Stack" memory are used, Heap are used in Non-Primitive

let myYoutubename = "RajaSekhdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "raj@google.com"

console.log(userOne.email);
console.log(userTwo.email);