// SINGLETON
//Object.create

// OBJECTS LITERALS

const mysym = Symbol("key1")//defining symbol

const Jsuser = {
    name: "hitesh", // behind the scene hamari key jo hai vo string consider hoti h
    "full name": "hitesh choudhary",/* 'full name': 'hitesh choudhary', Now if we try to access full name using dot it will not be 
    possible because hamne khud key ko string ki trah likh diya hai*/
    [mysym]: "mykey1", //  [Symbol(key1)]: 'mykey1'
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isloggedin: false,
    lastloggedin: ["monday","Saturday"]
} // object ban gya

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mysym])//symbol ke syntax main ham brackets main string ki tarah nhi likhte hai jsut name of symbol, value main farak nhi padega bas syntax alag hoga  

Jsuser.email = "hitesh@chatgpt.com"
//Object.freeze(Jsuser)// ab ismain koi changes nhi honge agar koi krna chahega toh
Jsuser.email = "hitesh@microsoft.com"//error nhi ayega lekin change bi nhi hoga
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("hello js user.")
}

Jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())



