//___________________________________________________________________ 'For of' Loop ____________________________________________________________________________________________________________________________________________________________________________________________________

let arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
  // Output: 1 2 3 4 5 


const greetings = "Hello World"

for (const greet of greetings) {
    // console.log('Each char is', greet);
} 


// Note: map is a unique 
const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United State Of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


//________________________________________________________ 'for in' loop ________________________________________________________________________________________________________________________________________________________________________________________________________________

const myObject = {
    cpp: "c++",
    js: 'javascript',
    py: 'python',
    go: 'golang'
}

for (const key in myObject) {
    // console.log(key);
}
   // Output: cpp js py go


// how to get 'values' of key in object

for (const key in myObject) {
    // console.log(myObject[key]);
}
    // Output: c++ javascript python golang


// how to print both 'keys' and 'values' in object 

for (const key in myObject) {
    let result = key + " shortcut for " + myObject[key]
        // console.log(result);
    }



// Note: for in loop are not recommended to iterate arrays

const myArray = ['apple', 'mango', 'pineapple', 'orange']

for (const items in myArray) {
    // console.log(myArray[items]);
}


//_____________________________________________________________________________________ for each method _________________________________________________________________________________________________________________________________________________________________

const myArray2 = ['js', 'py', 'cpp', 'java']

myArray2.forEach( function (item) {
    // console.log(item);
} )

// by using arrow function:

myArray2.forEach( (items) => {
    // console.log(items);
} )

// now printing items, indexes and whole array

myArray2.forEach( (item, index, array) => {
    // console.log(item, index, array);
} )



const myObjects = [
    {
        fullname: 'raja sekh',
        age: '18'
    },

    {
        fullname: 'elon musk',
        age: '55'
    },

    {
        fullname: 'mark zukerburk',
        age: '48'
    },
]

myObjects.forEach( (value) => {
    // console.log(value.fullname);
} )

myObjects.forEach( (value) => {
    // console.log(value.age);
} )


// now we print all together:

// by destructuring method within the loop
myObjects.forEach( (value) => {
    const {fullname, age} = value
    console.log(`fullname: ${fullname}, age: ${age}`);
} )


// by brackets notations within the keys
myObjects.forEach( (value) => {
    const fullname = value['fullname']
    const age = value['age']
    console.log(`${fullname} ${age}`);
} )







