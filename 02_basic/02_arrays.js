const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvel_heros[3][1]); // output: Batman

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]


// Note: The code const all_new_heros = [...marvel_heros, ...dc_heros] is a concise way to create a new array named all_new_heros that combines the elements of both marvel_heros and dc_heros arrays.
// * Spread Operator (...): The ... (spread operator) is used twice in this line. It's a powerful tool that allows you to expand the contents of iterable objects (like arrays) into individual elements within a new array literal.
// # Note: Spreading Elements in Arrays: 1. Combining Arrays, 2. Copying Arrays (Shallow Copy), 3. Extracting Elements
const all_new_heros = [...marvel_heros, ...dc_heros] // Most prefferable

console.log(all_new_heros); // output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

// Note: The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Depth Control (Optional): You can optionally specify a depth parameter to flat(). This parameter indicates how many levels of nested arrays you want to flatten.

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // Output: [1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]



console.log(Array.isArray(["Raj"])); // output: true
console.log(Array.isArray("Raj")); // output: flase
console.log(Array.from("Raj"));
console.log(Array.from({name: "Raj"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));