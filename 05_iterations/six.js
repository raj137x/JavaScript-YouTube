
// const coding = ['js', 'ruby', 'java', 'python']


// Note: 'for each' not return any value
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);


// Note: Explanation is in "iterations-2_Notes.txt"

// Whenever we use "filter" we get 'callback function' in it  inside the callback function every value access each, then after we need to give a conditions which elements satisfy the conditions or true the conditions those elements are return.
const myNums = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )

// In this we got 'empty array' because we use here 'curly braces' after arrow, means we start scope here and whenever we start 'scope' we write 'return' keyword 
// const newNums = myNums.filter( (num) => {
//     num > 4
// } )     // Output: []

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) 

// console.log(newNums);


// # Now we use 'for each' 

const newNums2 = []

// in callback functin we call all number "num"
myNums.forEach( (num) => {
    if (num > 4) {
        // The push() method adds new items to the end of an array.
        newNums2.push(num)
    }
} )
 
// console.log(newNums2);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // # I need those books which 'genre' is 'History'
//   let userBooks = books.filter( (bk) => bk.genre === 'History' );

// # I need thoes books which 'publish' is after '2000'
// In here we open 'scope {}', now we use 'return' keyword
//   const userBooks = books.filter( (bk) => {return bk.publish >= 2000} );

// # I need a books which 'publish' after '1995' and it's 'genre' should be 'History'
const userBooks = books.filter( (bk) => {
    // here we use 'logical AND (&&) Operator' for checking two or morre condition at a time
     return bk.publish >= 1995 && bk.genre === 'History' 
} )

  console.log(userBooks);