
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anjali"
tinderUser.isLoggedIn = true

// console.log(tinderUser.id);
// console.log(typeof tinderUser.id);
// console.log(typeof tinderUser);

// tinderUser[0] = "432bcd"
// console.log(tinderUser);

// let create nested objects

const anotherUser = {
    email: "Raj6174x@gmail.com",
    userfullname:{
    fullname:{
        firstname: "Raja",
        lastname: "Sekh"
    }
    }
    
}

// console.log(anotherUser.userfullname.fullname.firstname);

const email = anotherUser.email

const firstName = anotherUser.userfullname.fullname.firstname
const lastName = anotherUser.userfullname.fullname.lastname

const fullName = `${firstName} ${lastName}`; // By using Template Literals we combine it

// console.log(fullName); 

console.log(`Email: ${email} FullName: ${fullName}`); // Output: Email: Raj6174x@gmail.com FullName: Raja Sekh



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


console.log({...obj1, ...obj2});


console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)); // output: [ '123abc', 'Anjali', true ]

console.log(Object.entries(tinderUser)); // Output: [ [ 'id', '123abc' ], [ 'name', 'Anjali' ], [ 'isLoggedIn', true ] ]


console.log(tinderUser.hasOwnProperty('id')); // output: True