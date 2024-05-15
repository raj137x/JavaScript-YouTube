//________________________________________________ filter method ____________________________________________________________________________________________________________________________________________________________________________________-

const myNumbers = [1, 2, 3, 4, 5]

// const myNums = myNumbers.filter( function (num) {
//     return num >= 3
// } )
// console.log(myNums);  // Output: [ 3, 4, 5 ]


const myNums = myNumbers.filter( (num) => num > 2 )
// console.log(myNums); // Output: [ 3, 4, 5 ]


// Note: Now we use "for each method"

const myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = []

myNumbers2.forEach( (num) => {
    
    if (num > 3) {
        newNum.push(num)
    }
} )

// console.log(newNum); // Output: [4, 5, 6, 7, 8, 9, 10]


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

//   let userBooks = books.filter( (bk) => bk.genre === 'Science' )

//   userBooks = books.filter( (bk) => bk.publish >= 1999 )

  userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History' )

//   console.log(userBooks);


  //__________________________________________________ map() method ____________________________________________________________________________________________________________________________________________________________________________


const myAnotherNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const anotherNum = myAnotherNum.map( (num) => {return num + 10} )


// Now using "Chaning Approach"

const anotherNum = myAnotherNum
                                .map( (num) => num * 10 )
                                .map( (num) => num + 1 )
                                .filter( (num) => num > 40)

// console.log(anotherNum);


// ________________________________________________________ reduce() method ________________________________________________________________________________________________________________________________________________________________________

const integers = [1, 2, 3, 4]

const myTotal = integers.reduce( (accumulator, currentValue) => {
    console.log(`acc: ${accumulator} currval: ${currentValue}`);
       return accumulator + currentValue

}, 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999,
    },
    {
        itemName: 'py course',
        price: 999,
    },
    {
        itemName: 'mobile dev course',
        price: 5999,
    },
    {
        itemName: 'data science course',
        price: 12999,
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(priceToPay);
