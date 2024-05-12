//immediately invoke function expression

(function chai()
{
    //named iife
    console.log("db one");
}

)();

((name) =>
{
    console.log(`${name} db two`);
}

)("abhi")

//1-no pollution from global scope
//2-immediate execution