const arr = [0,1,2,3,4]
console.log(arr);
arr.unshift(8)
console.log(arr);
arr.shift()
console.log(arr);

const newArr = arr.join()
console.log(arr);
console.log(newArr);

console.log("A" , arr);

const arr1 = arr.slice(1,3)
console.log(arr1);
console.log("B", arr);

const arr2 = arr.splice(1,3)
console.log(arr2);  
console.log("C",arr);     


//spread operator
const mc = ["A","B","C"];
const dc = ["D","E","F"];
const add = [...mc, ...dc];
console.log(add);

//string to array

const a1 = Array.from("Abhigyan");
const a2 = Array.of(100);

console.log(a1);
console.log(a2);
console.log(a2.length);