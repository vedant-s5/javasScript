/* # javascript and classes 

# primarily javascript is a prototype-based language

## OOP 

## Object
- collection of properties(valirables and constants) and methods(functions)

- toLowercase, toUpperCase etc etc ye hi objects hote hai

## why use OOP

## parts of OOP
Object literal

- constructor function
- Prototypes
- Classes
- Instamces (new, this)

## 4 pillars

Abstraction
Encapsulation
Inheritance
Polymorphism */

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`) 
        /*ab ye hame error dega(sirf username likhenge tab) kyuki use pta 
        nhi hai ki konse username ki baatkr rnhe hai kyuki is function
         ke andar to username kuch hai hi nhi
        ye hamne execution wali video mai execution context main padha tha
        ab ham yha pe this keyword use krenge*/
        // console.log(this)
        /* output:
            {
                username: 'hitesh',
                loginCount: 8,
                signedIn: true,
                getUserDetails: [Function: getUserDetails]
            } 
        */
//     }

// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) // will return empty object cuz abi global object main kuch bi ni hai

/* this keyword hamare use main tab ata hai jaise hamne do arrays define 
kre aur hame map function use krna hai but map function loop
automatically lagata hai to ham use btayenge konse array pe loop lagana hai
to uske lia ham this keyword use krte hai, jab bi ham this keyword use krte hai 
to ham current context ki baat kar rhe hai */


// Constructor function
// const response = new Promise()
// const datetime = new Date()
/* yha pe jo new hai vo ek constructor function h
ye ham new instances ya new context banane ke lia use krte hai*/


function User(username,loginCount,isLoggedin){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    // return this, zarurat nhi hai likhne ki cuz ye implicitely define nhi hoti hai
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("chaiAurCode",18,false)
/* userTwo main hamare sath ye hua ki even if hamne console log unserOne ke lia 
kra hai but user2 ne sari values overwrite kr di hai, islia apan
new keyword ko use krte hai kisse values over write na ho, kyuki ek constructor function
hame hamesha new context deta hai mtlb new copy deta hai, phir ham uske sath 
kuch bi kre values overwrite nhi hogi*/
/* THODA AUR new KEYWORD KE BARE MAIN:
step 1 - new keyword use krte hai to sabse pehle ek new object create hota hai.
step 2 - ek constructor function call hota hai new keyword ke karan
step 3 - this ke andar add ho jayega hamara saman sara*/
console.log(userOne.constructor); // output :  [Function: User]
// console.log(userTwo)

//read about instanceof constructor




