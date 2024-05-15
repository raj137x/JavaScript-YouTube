//____________________________________________________ Practicing "one.js" ___________________________________________________________________________________________________________________________________________________________________

for (let index = 0; index <=8; index++) {
    const element = index;
    // console.log(element);
    
}

for (let index2 = 0; index2 <=10; index2++) {
    const element = index2;
    if (index2 === 6) {
        // console.log("6 is my favourite number");
    }
    // console.log(element);
}


// Nested 'for' loop

for (let o = 1; o <=10; o++) {
    // console.log(`Outer loop value ${o}`);
    for (let i = 1; i <=10; i++) {

        // console.log(`Inner loop value ${i} outer loop ${o}`);

        // console.log(`${o} * ${i} = ${o*i}`);
        // console.log(o + '*' + i + '=' + o*i);
        
    }
}


const myArray = [
    "Batman", "Ironman", "Hulk"
]

// console.log(myArray.length);

for (let index3 = 0; index3 < myArray.length; index3++) {
    const element = myArray[index3];
    // console.log(element);
    
}


// Break and continue 

for (let b = 0; b <= 8; b++) {
    if (b === 6) {
        // console.log("Dected 6");
        break;
    }
    const element = b;
    // console.log(b);
    
}

for (let c = 0; c <= 12; c++) {
    if (c === 5) {
        // console.log("Dected 5");
    }
    const element = c;
    // console.log(element);
    
}


// __________________________________________________________________________ While loop ____________________________________________________________________________________________________________________________________________________________________

let count = 1

while (count <= 10) {
    // console.log("Count:", count);
    count++;
}


let myArray2 = ["Apple", "Banana", "Coconut"]
let arr2 = 0
while (arr2 < myArray.length) {
    // console.log(`Value is ${myArray2[arr2]}`);
    arr2++
}  

//____________________________________________________________ do...while loop _________________________________________________________________________________________________________________________________________________________________________________________________________

let score = 1

do{
    console.log(`Score is ${score}`);
    score++
} while (score <= 10) {
}

let score2 = 12

do {
    console.log(`Score value is ${score2}`);
    score2++
} while (score2 <= 10) {
    
}