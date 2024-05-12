// Nullish coalescing operator(??) : null undefined

let val1;
val1 = 5 ?? 10
let val2 =null ?? 10
let val3 = undefined ?? 13
console.log(val1); // 5
console.log(val2);
console.log(val3);

//Terniary operator
// condition ? true : false

const price = 100
price <=80 ? console.log("less than 80") : console.log("more than 80");

//foreach loop

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

const myNums =[1,2,3,4,5,6,7,8,9,10]
const newNums =myNums.filter((num) => num>4)

console.log(newNums);


// The nullish coalescing operator is commonly used when dealing with optional values, default settings, or scenarios where you want to ensure that a variable has a non-null or non-undefined value.
// Example with function parameters
function greet(name) {
    const userName = name ?? "Guest";
    console.log(`Hello, ${userName}!`);
  }
  
  greet();         // Output: "Hello, Guest!"
  greet("John");   // Output: "Hello, John!"
  