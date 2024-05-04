const name = "hitesh"
const repoCount = 50

// const gameName = new String('Raja Sekh')   * Another way of declaring Sting

// console.log(name + repoCount + " Value");  // * Not recommended string Concatenation 

// # Note: String concatenation in JavaScript is the process of joining two or more strings together to create a new string.
// There are several ways to concatenate strings in JavaScript:
// 1. Using the + Operator, 2. Using the Array#join() Method, 3. Using the String#concat() Method, 4. Using Template Literals

// Using Template Literals: Template literals allow for expressions and variables within a string, enclosed by backticks (`).

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Note: Always prefer this syntax "Template literals"

const gameName = new String('Raja-rs') 

// console.log(gameName[0]);
// console.log(gameName.__proto__);

//    * Stings methods

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4) // substring() method in JavaScript to create a new string from a portion of another string, and then it logs the result to the console.
console.log(newString);

// # Note: We can't assign negative value in 'substring', but we can assign negative value in 'slice' only

const anotherString = gameName.slice(-8, 4) // slice() method to create a new string from a specified section of another string, and then assigns it to the constant variable anotherString
console.log(anotherString);

const newStringOne = "   Raja   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raja.com/raja%20sekh"

console.log(url.replace('%20', '-'));

console.log(url.includes('raja'));


console.log(gameName.split('-'));



// # Note: String methods in JavaScript are used to perform operations on string values. They are essential for manipulating strings, which are sequences of characters

// # In JavaScript, there are several methods used to work with strings. Here are some of the commonly used string methods:

// *charAt(): Returns the character at a specified index.

// *charCodeAt(): Returns the Unicode of the character at a specified index.

// *concat(): Joins two or more strings and returns a new string.

// *includes(): Determines whether a string contains a specified substring.

// *indexOf(): Returns the index of the first occurrence of a specified value in a string.

// *lastIndexOf(): Returns the index of the last occurrence of a specified value in a string.

// *match(): Searches a string for a match against a regular expression and returns the matches.

// *repeat(): Returns a new string with a specified number of copies of the string it is called on.

// *replace(): Searches for a match between a substring (or regular expression) and a string, and replaces the matched substring with a new substring.

// *search(): Searches for a match between a regular expression and a string, and returns the index of the match.

// *slice(): Extracts a part of a string and returns it as a new string.

// *split(): Splits a string into an array of substrings.

// *startsWith(): Determines whether a string begins with the characters of a specified string.

// *substring(): Returns the characters in a string between two indexes.

// *toLowerCase(): Converts a string to lowercase letters.

// *toUpperCase(): Converts a string to uppercase letters.

// *trim(): Removes whitespace from both ends of a string.