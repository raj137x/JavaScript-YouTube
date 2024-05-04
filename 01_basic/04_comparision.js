// console.log(2 > 1); // This will print 'true' because 2 is greater than 1.
// console.log(2 >= 1); // This will print 'true' because 2 is greater than or equal to 1.
// console.log(2 < 1); // This will print 'false' because 2 is not less than 1.
// console.log(2 == 1); // This will print 'false' because 2 is not equal to 1.
// console.log(2 != 1); // 


//    # Problem occur
// When we compare any value, there "datatype" should be same
//  console.log("2" > 1);
//  console.log("02" > 1);

 console.log(null > 0);
 console.log(null == 0);
 console.log(null >= 0);

 console.log(undefined == 0);
 console.log(undefined > 0);
 console.log(undefined < 0);

 // ===

 console.log("2" === 2);

//    # Note

// In JavaScript, the double equal sign (==) and the triple equal sign (===) are both comparison operators, but they differ in how they compare values:

// == (Double Equals): This operator performs an abstract equality comparison. It means that before comparing the values, it converts the types of the 
// variables to match each other, if necessary. This process is known as type coercion. For example, 0 == false evaluates to true because 0 is coerced to 
// false before the comparison.

// === (Triple Equals): This operator performs a strict equality comparison. It checks whether the variables being compared have both the same value and 
// the same type. If the types are different, the comparison will immediately return false, without attempting to convert them. For instance, 0 === false
//  evaluates to false because, although 0 is falsy, its type (number) is not the same as that of false (boolean).