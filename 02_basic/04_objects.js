// Declare objects in JavaScript using the constructor way

// const tinderUser = new Object() // This is a Singleton Object

const tinderUser = {} // This is non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Anjali"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // Output: { id: '123abc', name: 'Anjali', isLoggedIn: false }


// #  ways to create nested objects

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Raja",
            lastname: "Sekh"
        }
    }
}

// console.log(regularUser.fullname); // Output: { userfullname: { firstname: 'Raja', lastname: 'Sekh' } }

// console.log(regularUser.fullname.userfullname); // Output: { firstname: 'Raja', lastname: 'Sekh' }

// console.log(regularUser.fullname.userfullname.firstname); // Output: Raja


// # Note: there are a couple of common ways to merge two objects in JavaScript: 1. Using the Spread Operator (...), 2. . Using the Object.assign() Method:
// Important Note: Both methods create a new object with the merged properties. They don't modify the original objects.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2} // Not Preferable // Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }  // The empty curly braces {} before user and preferences in Object.assign ensure that a new, empty object is used as the target for the merge operation. This prevents unintended modifications of the original objects and clarifies your intent in the code.

// *  Using the Spread Operator (...)
const obj3 = {...obj1, ...obj2} // We use 99% of the time this method. // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(obj3);



// Note: The code defines a constant array named 'users' containing three identical user objects. 

const users = [
    {
        id: 1,
        email: "r@gmail.ocm"
    },
    {
        id: 1,
        email: "r@gmail.ocm"
    },
    {
        id: 1,
        email: "r@gmail.ocm"
    }

]
users[1].email // The expression users[1].email specifically retrieves the email address ("r@gmail.ocm") from the second user object (index 1) in the array.


console.log(tinderUser);

console.log(Object.keys(tinderUser)) // This line utilizes the Object.keys method. It takes the tinderUser object as an argument and returns an array containing the names (keys) of all the properties within the object.
// When you run this line, the console will likely output ["id", "name", "isLoggedIn"] because these are the three property names you added to the object.

console.log(Object.values(tinderUser)) // This line uses the Object.values method. It takes the tinderUser object as an argument and returns an array containing the values of all the properties within the object.
// Running this line will likely print ["123abc", "Anjali", false] to the console, corresponding to the values of the id, name, and isLoggedIn properties, respectively.

console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Anjali' ], [ 'isLoggedIn', false ] ]  // Object.entries doesn't directly output the contents of the object. Instead, it transforms the object into a new data structure: an array.
// Each element in this array is itself a smaller array containing two elements:
// * The first element is the key (property name) of a property in the original object.
// * The second element is the value associated with that key in the original object.


// Note: 1. tinderUser.hasOwnProperty(): This part checks for a specific property within the tinderUser object.
// * .hasOwnProperty(): This is a method built into JavaScript objects. It takes a property name (as a string) as its argument.
// * tinderUser: Again, this assumes there's a variable named tinderUser that holds an object.

console.log(tinderUser.hasOwnProperty( 'isLoggedIn')); // Output:  True
console.log(tinderUser.hasOwnProperty( 'isLogged')); // Output:  False

// What it outputs:
// * hasOwnProperty doesn't directly output the value of a property. Instead, it returns a boolean (true or false).
// * It checks whether the property you specified (between the parentheses) exists directly on the object itself, not inherited from its prototype chain.// * 





// Topic: Object de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Raj"
}

// Note: Destructuring Assignment:
// * const (courseInstructor) = course tries to use destructuring assignment to extract the courseInstructor property from the course object.
// * The curly braces {} enclose the property name to be extracted.
// * The property name courseInstructor matches exactly with the property name in the course object.

// const {courseInstructor} 

const {courseInstructor: instructor} = course // This is the destructuring assignment part.
// courseInstructor: This is the property name we want to extract from the course object (assuming it exists).
// : instructor: This part renames the extracted value. We're taking the value from the courseInstructor property and assigning it to a new variable named instructor.

// console.log(courseInstructor);
console.log(instructor);


