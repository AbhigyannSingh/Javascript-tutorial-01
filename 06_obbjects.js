

const tinderUser = {}

tinderUser.id  = "123abc"
tinderUser.name ="Abhi Gyan";
tinderUser.isLoddedIn = false



console.log(tinderUser)

const regular= {
    email: "abhi@gmail.com",
    fullname: {
        userfullname :
        {
            firstName:"Abhi",
            lastName: "Gyan"
        }
    }
}

console.log(regular.fullname);

const obj1  = {1:"a",2:"b"}
const obj2  = {3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2)

const obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))

