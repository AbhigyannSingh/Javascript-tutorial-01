console.log("abhi");  

const accId = 144553
let accEmail = "abhi@gmail.com"
var accPass = "1234567"
accCity = "delhi"

//accID = 23 //not allowed

/*prefer not to use var because of issue in block scope and functional scope*/

accEmail = "manu@gmail.com";
accPass ="0987"
accCity = "lucknow"

console.log(accId + "\n" + accEmail + "\n" + accCity + "\n" +accPass); 

console.table([accId,accEmail,accPass,accCity])