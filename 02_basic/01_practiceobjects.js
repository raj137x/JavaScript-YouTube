// Object literal 


const mysym = Symbol("key1")

const person = {
    name: "Raj",
    "full name": "Raja Sekh",
    [mysym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "rajasekh@google.com"
}

console.log(person.email);
console.log(person["name"]);
console.log(person["full name"]);

person.email = "raj@microsoft.com"
// console.log(person.email);


person.greeting = function(){
    console.log("Hello person");
}

console.log(person.greeting())


person.greetingtwo = function(){
    console.log(`Hello person ${this.name}`);
}

console.log(person.greetingtwo())
