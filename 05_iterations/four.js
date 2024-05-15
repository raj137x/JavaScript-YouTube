// 1. Note: we see in our previous file "three.js" 'for of' loop won't iterate 'Object' directly. 
// 2. Note: Iterating over Object Properties:
// If you want to iterate over the properties (keys) of an object, you can use the for...in loop:


// const myObject =  {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: "rubby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//    console.log(key);
// }
//   Output: js cpp rb swift 


// Note: Accessing Value and Printing:
// * The line console.log(myObject[key]); inside the loop is executed for each iteration. It retrieves the value associated
//  with the current key using bracket notation (myObject[key]). The value is then printed to the console.

const myObject =  {
    js: 'javascript',
    cpp: 'c++',
    rb: "rubby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//    console.log(myObject[key]);
// }
    // Output: javascript c++ rubby swift by apple


// Note: Now we print both Key-Value pairs:

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
//  }
   // Output: js shortcut is for javascript
  //          cpp shortcut is for c++
 //           rb shortcut is for rubby
 //           swift shortcut is for swift by apple



 // NOTE: "for in" loop in array:

 // # What Will Happen:
// The loop will still iterate, but it will iterate over the numeric indexes, not the actual elements in the array.

// # Printing Indexes:
// The line console.log(key); inside the loop is executed for each iteration. Since key holds the indexes, this will print the numeric indexes of the array elements to the console.

// Output will be 0 1 2 3 4 

// The loop iterated over the indexes (0 to 4) of the programming array and printed each index value.

//  const programming = ["js", "rb", "py", "java", "cpp"]

//  for (const key in programming) {
//     console.log(key);
//  }


// # Recommended Approach for Arrays:
// To iterate over the actual elements of an array, you should use a for...of loop or a traditional for loop with a counter variable:

// Important: But still we can print actual 'elements or values' of array even in 'for in' loop:

 const programming = ["js", "rb", "py", "java", "cpp"]

 for (const key in programming) {
    // console.log(programming[key]);
 }
    // Outpt: js rb py java cpp



// Important Note: Map objects are not directly iterable using a for...in loop in JavaScript.  

// # 'for in' loop in 'map':

const maps = new Map()
maps.set('IN', "India")
maps.set('USA', "United State of America")
maps.set('Fr', "France")

// for (const key in maps) {
//     console.log(key);
// }


