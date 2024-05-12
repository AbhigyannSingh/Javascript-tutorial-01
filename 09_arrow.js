const user =
{
    username: "abhigyan",
    price : 200,

    welcomeMessage: function(){
        console.log(`$({this.username}) , welcome to website`);
        console.log(this);
    }
    

}
//user.welcomeMessage();
//user.username = "sam"
//user.welcomeMessage();

//console.log(this);

//function one()
//{   
//    let username = "abhi"
//    console.log(this.username);
//}

//one()


/*const one = function()
{   
    let username = "abhi"
    console.log(this.username);
}
*/

/*const one = () =>
{   
    let username = "abhi"
    console.log(this.username);
}*/
//one()

const one = (num1 , num2) =>
{
    return num1+num2
}

console.log(one(4,6))


// Arrow functions do not have their own this context. They inherit this from the enclosing scope('this' inside an arrow fun. is same as outside the arrow function). In contrast, regular functions have their own this context, which can lead to different behavior in certain situations.

setTimeout(() =>
{
    console.log("good morning");
},2000);
// play after 2 sec