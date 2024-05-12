function addTwoNumbers(num1,num2)
{
    const result = (num1+num2)
    return result
}
const resultt = addTwoNumbers(5,7);
console.log(`The sum is ${resultt}`);



//............................



function calculateCartPrice(...num1)
{
    return num1
}
let price=calculateCartPrice(30,40,60,80,90);
console.log("Total Price of the Cart Items are "+price);
console.log(calculateCartPrice(10,20,30));
