// let a=10, b=10, c=10

// if (a == b == c) {
//     console.log("Hello");
// } else {
//     console.log("Bye Bye!");
// }

// Output: Bye Bye!, Reason: a == b it's true and true is a boolean and true value is 1 also and we did further compare with c which is 10. So, thaat comparision is not true.


//________________________________________ Practice start here ___________________________________________________________________________________________________________________________________

// let temperature = 50

// if (temperature == 40) {
//     console.log("less than 40");
// } else {
//     console.log("greater than 40");
// }

// if (temperature >= 40) {
//     console.log("less than 40");
// } else {
//     console.log("greater than 40");
// }



// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);   // output: user power: fly
// } else {
//     let power = "NIL"
//     console.log(`user power: ${power}`);
// }

// if (score < 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);  
// } else {
//     let power = "NIL"
//     console.log(`user power: ${power}`);    // output: user power: NIL
// }



let age = 18

age > 18 ? console.log("you are eligible") : console.log("you are not eligible");   // Output: you are not eligible


// lets create multiple branches of excution

let price = 9999

if (price < 998) {
    console.log("price is less than 998");
} else if (price < 800) {
    console.log("price is less than 800");
} else {
    console.log("price is greater than 9999");
}


// lets trie 'Logical Operators'

let userLoggedIn = true
let creditCard = true
let emailFromGoogle = false
let emailFromMicrosoft = true


// AND Operator
if (userLoggedIn && creditCard) {
    console.log("Allow to buy course");
}

// OR Operator
if (emailFromGoogle || emailFromMicrosoft) {
    console.log("You logged in");
}

// NOT Operator

// let isLoggedIn = false;
// let notLoggedIn = !isLoggedIn; // notLoggedIn will be true (because !false is true)
// console.log(notLoggedIn); // Output: true



//___________________________________________________________________ SWITCH _______________________________________________________________________________________________________________________________________


const day = "Wednesday"

switch (day) {
    case "Monday":
        console.log("first day of an week");
        break;
    case "Tuesday":
        console.log("second day of an week");
        break;
    case "Wednesday":
        console.log("third day of an week");
        break;
    case "Thursday":
        console.log("forth day of an week");
        break;

    default:
        console.log("It's a weekend");
        break;
}
 // Output: third day of an week


 // When we not write 'break' after 'case'
 let month = 3

 switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
           // we not write 'break'
    case 4:
        console.log("April");
        break;
    case 1:
        console.log("May");
        break;
 
    default:
        console.log("Not found");
        break;
 }
  // Output: March and April



  //_______________________________________________________________________ TRUTHY & FALSY _____________________________________________________________________________________________________________________________________________

  const userName = 'Anjali'

  if (userName) {
    console.log('Got user Name');
  } else {
    console.log("Don't got user Name ");
  }
    // Output: Got user Name

    const userId = -0

    if (userId) {
        console.log("Your Identity detect");
    } else {
        console.log("Your Identity not detect");
    }
      // Output: Your Identity not detect


//_________________________________________________________ NULLISH _______________________________________________________________________________________________________________________________________________

let val1 = null ?? 10 // Output: 10
let val2 = undefined ?? 15 // Output: 15
let val3 = null ?? 22 ?? 30 // Output: 22
let val4 = null ?? 76 ?? undefined ?? 44 // Output: 76



console.log(val1, val2, val3);
console.log(val4);