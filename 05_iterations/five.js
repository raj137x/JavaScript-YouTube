// 1. forEach Method:

// * The line coding.forEach(function (value) {...}); calls the forEach method on the coding array.
// * The forEach method is a built-in function in JavaScript that iterates over each element in an array and executes a provided callback function for each element.
// * Inside the parentheses, we have a function definition that specifies what to do with each element in the array.

// 2. 3. Callback Function:

// @ The function passed to forEach is called a callback function. It takes one argument, which is named value in this case.
// @ The value argument represents the current element being processed from the coding array during each iteration.
// @ Inside the curly braces {} of the callback function, we have the following statement:
//  console.log(value);

// @ This line uses the console.log function to print the value of the value argument to the browser's developer console.

// # How It Works:

// 1. The code first creates an array named coding containing the programming language names.
// 2. Then, it calls the forEach method on the coding array.
// 3. The forEach method iterates over each element in the array one by one.
// 4. For each element, it calls the callback function, passing the current element's value as the value argument.
// 5. Inside the callback function, the console.log(value) statement prints the value of the value argument (which is the current element from the coding array) to the console.


// # Note: Choosing the Right Method:

// * If the goal is simply to iterate over an array and perform an action on each element without needing the index, "forEach" is often the better choice for its simplicity.
// * If you need the index for more complex operations within the loop or prefer the explicit control offered by a traditional loop, a "for loop" might be more suitable.

// In this specific example, forEach is a great choice because it prioritizes readability and conciseness for the task of iterating and printing each element.

// Important Note: Callback Functions in JavaScript: Flexibility with (or without) Function Names

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (value) {
    // console.log(value);
} )
   // Outptu: js ruby java python cpp



// # By using "Arrow Function" 

coding.forEach( (item) => {
    // console.log(item);
} )
     // Outptu: js ruby java python cpp



function printMe(items){
    console.log(items);
}
// we only give refernce 
// coding.forEach(printMe)  // Outptu: js ruby java python cpp



coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

//  Output: js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//        ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//        java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//        python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//        cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]



// # Objects in a Array:

const myCoding = [
     {
        languageName: "Javascript",
        languageFile: "js"
     },

     {
        languageName: "Java",
        languageFile: "java"
     },

     {
        languageName: "Python",
        languageFile: "py"
     }

]

myCoding.forEach( (items) => {
    console.log(items.languageName);
} )
    // Output: Javascript
//             Java
//             Python


