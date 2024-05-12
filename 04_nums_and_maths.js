const balance = new Number(100)
console.log(balance);

const score = 100
console.log(score);

console.log(balance.toString());
console.log(balance.toString().length)
console.log(balance.toFixed(1));


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))

const hundred = 1000000
console.log(hundred.toLocaleString())

console.log(Math)
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));
console.log(Math.round(5.6));
// Math Object Methods
console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));

const first = Math.random()*10 +1
if(first <0)
    {
        console.log(first+1)
    }
else{
    console.log(first);
}
