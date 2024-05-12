//singleton
Object.create

//objects literls

const symbol = Symbol("Key1")
const JsUser = 
{
    name: "abhi",
    "full name" : "abhigyan",
    [symbol] : "I am a js user" ,       
    age : 18,
    location :"jaipur",
    email : "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays :["Monday" , "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser.fullName)//undefined
console.log(JsUser["full name"])
console.log(JsUser[symbol])

JsUser.email = "abhi@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email = "adgffs"
console.log(JsUser);

JsUser.greetings = function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greetings());


//........................*******........................






