const name = "raja "
const age =  18

// console.log(name + age);

let myName = new String('Raja Sekh')
// console.log(myName[0]);

// # Stings Methods

console.log(myName.charAt(3));

let firstA = myName.indexOf('a');
console.log(firstA);

let secondA = myName.indexOf('a', firstA+1); // The indexOf() method only returns one index at a time, so to find subsequent occurrences of the same character or   substring, you need to use the method iteratively with updated starting positions.
console.log(secondA);

let newString = myName.substring(0, 3)
console.log(newString);

let anotherString = myName.slice(1, 3)
console.log(anotherString);


let newStringOne = "  Anjali  "
console.log(newStringOne);
console.log(newStringOne.trim());

let url = "https://raja.com/anjali%20khatoon"

console.log(url.replace('%20', '-'));
console.log(url.includes('raja'));

console.log(myName.split());

console.log(myName.toUpperCase())

// # Note: The "charCodeAt()" method returns the Unicode of the character at a specified index (position) in a string.
let sentence = 'The quick brown fox jumps over the lazy dog'
let index = 4;
console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

// # Note: The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
let sentence2 = "Hello planet earth, you are a great planet."
console.log(sentence2.lastIndexOf('planet'));

// # Note: The match() method in JavaScript is used to retrieve the result of matching a string against a regular expression.
let sentence3 = new String("The rain in SPAIN stays mainly in the plain");

// * A search for "ain" using a string:
console.log(sentence3.match("ain"));

// * A search for "ain" using a regular expression:
regexp = /ain/
console.log(sentence3.match(regexp));

// * A global search for "ain":
console.log(sentence3.match(/ain/g));

// * A global, case-insensitive search:
console.log(sentence3.match(/ain/gi));


// # Note: The repeat() method returns a string with a number of copies of a string.
let sentence4 =  "Hello world!";
console.log(sentence4.repeat(3));
console.log(sentence4.toLowerCase());



// Problem 1

let str = "Please give Rs 1000"
let ammount = Number(str.slice(15));
console.log(ammount);
console.log(typeof ammount);

// Problem 2

let friends = "Deepika"
let friendsrep1 = friends.replace('e', 'R') // replacement of first occurrence of the letter 'e' with 'R'
let friendsrep2 = friendsrep1.replace('e', 'T') // now replacement of second occurrence of the letter 'e' with 'T'
console.log(friendsrep2);