// Singleton
// Object.create


// object literals
// # Note: In JavaScript, object literals are a concise and versatile way to create objects. They provide a structured format for defining collections of key-value pairs, where:
// * Keys: Act as unique identifiers (typically strings) for the data you're storing.
// * Values: Represent the actual data associated with each key, which can be of various data types like strings, numbers, booleans, arrays, functions (methods), or even other objects.

// const objectName = {
//     key1: value1,
//     key2: value2,
//     // ... more key-value pairs
//   };



// Note: There are three main ways to access objects in JavaScript:

// 1. Dot notation: This is the simplest method and is used when you know the property name ahead of time and it's a valid identifier (without spaces or special characters).

// const person = {
//     name: "Alice",
//     age: 30
//   };
  
//   const name = person.name; // Accessing the "name" property
//   console.log(name); // Output: "Alice"


// 2. Bracket notation: This method is more flexible and can be used for property names that are dynamic (determined at runtime) or contain spaces or special characters.

// const person = {
//     "first name": "Bob",
//     age: 35
//   };
  
//   const firstName = person["first name"]; // Accessing property with spaces
//   console.log(firstName); // Output: "Bob"
  
//   const propName = "age";
//   const age = person[propName]; // Accessing property using a variable
//   console.log(age); // Output: 35


// 3. Destructuring: This is a more advanced technique for extracting specific properties from an object and assigning them to variables.

// const person = {
//     name: "Charlie",
//     age: 40
//   };
  
//   const { name, age } = person; // Destructuring assignment
//   console.log(name); // Output: "Charlie"
//   console.log(age); // Output: 40

// Note: Choosing the right method:

// * Use dot notation for simple access when the property name is known and valid.

// * Use bracket notation for dynamic property names or names with special characters.

// * Use destructuring for concisely extracting multiple properties into variables.



const mySym = Symbol("key1")

const JsUser = {
    name: "Raja",
    "full name": "Raja Sekh", // here, there is no chance to access this object with the "dot notation"
   [mySym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "raj6174x@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


// * Changing values in Objects

// Note: Yes, in JavaScript, when you change a value within an object, you are directly modifying the original object. This is because objects in JavaScript are passed by reference, not by value.

JsUser.email = "raj@chatgpt.com"

// Object.freeze(JsUser) // The Object.freeze() method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.

JsUser.email = "raj@microsoft.com" // now this change in email will not be added, because before write "raj@microsoft.com" we freeze

// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello Js users");
}

console.log(JsUser.greeting()); // Output: Hello Js users


// # Adding a Method (JsUser.greeting = function() {...}):

// * The code adds a method named greeting to the JsUser object using dot notation (.).

// * A function is assigned to the greeting property. This function doesn't take any arguments (function() { ... }).

// * Inside the function's body, console.log("Hello Js users"); is used to print the message "Hello Js users" to the console.


// # Calling the Method (console.log(JsUser.greeting());):

// * The greeting method is called using dot notation (JsUser.greeting()).

// * Since greeting is a function, parentheses () are required to execute it.

// * When the function is executed, the message "Hello Js users" is printed to the console.



// Here we reference the "name" which present in the Object (JsUser)
// Now to reference the "name" our first step is convert "String" to Backtick (`) and its called String 'interplation'
// when we reference the same object we use "this" and when we use "this" and use "dot (.)" then whatever is our "Object" its all property we get it
JsUser.greetingTwo = function(){
    console.log(`Hello Js users, ${this.name}`);
}

console.log(JsUser.greetingTwo()); // Output: Hello Js users, Raja

console.log(JsUser);