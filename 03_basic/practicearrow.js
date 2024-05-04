// A key difference between traditional functions and arrow functions in JavaScript is how they handle the this keyword.

// # Traditional Functions:

// * In traditional functions, the this keyword refers to the object that calls the function. This can be the window object, a DOM element, or any other object.

// # Arrow Functions:

// * Arrow functions do not have their own binding to this. They inherit the this value from the enclosing scope where they are defined.

// # Here's a breakdown to illustrate the difference:

// // Traditional function
// function person() {
//     console.log(this.name); // this refers to the object that calls person()
//   }
  
//   const user = {
//     name: "Bard"
//   };
  
//   user.greet = person; // person() is assigned to the greet method of the user object
//   user.greet(); // Output: Bard (this refers to the user object)
  
//   // Arrow function
//   const user = {
//     name: "Bard",
//     greet: () => {
//       console.log(this.name); // this refers to the window object, not user
//     }
//   };
  
//   user.greet(); // Output: "" or the global object's name property (this refers to window)
  




  const user = {
    username: "anjali",
    age: 17,

    greet: function(){
      console.log(`${this.username} welcom to website`);
    } 

  }
  user.greet()

  user.username = "Raja"

  user.greet()

  
  const user2 = {
    name: "Salman Khan",
    price: 9999,

    welcomeMessae: function() {
      console.log(`${this.name} welcome back to my website`);
      console.log(this);
    }
  }

  user2.welcomeMessae()

  console.log(this);


  // Arrow function:

  const chai = (x,y) => {
    return x/y
  }

  console.log(chai(4, 2));


  // now we declare single line function:

  const multiply = (x,y) => (x*y)

  const product = multiply(2,4)
  console.log(product);