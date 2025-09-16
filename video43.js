/* javascipt ka prototypal behaviour hai, mtlb ki js haar nhi manti hai
agar koi chiz nhi milti to uski aur upper jati hai parent main nhi mili to 
grandparent phir grandgrandparent aise, yahi uska prototypal behaviour hai*/


/* hame sab kuch prototype ke through hi milta hai
new keyword, constructor vagera aur bi bahut sare methods hai aur 
classes hai jo yai seta hai*/

/* kitna bi andar ja skta hai ye, simple language main baal ki khaal nikal deta hai
info lane main*/

/* jaise hamne array create kra to pehle array ka prototype uske baad 
object level ka prototype  ata hai aur bi age ja skta hai ye*/

/* at the end of the day js main sab object hi hai vahi se sab inherit hoke ata hai
baki marzi hamari hai ki ham kya use krte hai kya nhi*/

// function ek object hai ya function hi hai?????? let's see

function myNumber(num){
    return num*5
}
myNumber.power = 2
console.log(myNumber(5)) // 25
console.log(myNumber.power) // 2 // .access wale func sirf object ke lia use hote hai to func pe bi sai chlra hai ye
console.log(myNumber.prototype)// {}

/* upper wali study se hame pta chlta hai ki js main function, func ki tarah
bi behave krta hai aur chahe toh object ki tarah bi behave krta hai, kyuki at the 
end sab object hi toh hai js main*/


function createuser(username,score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++ 
    /*sirf score++ likhenge to vo recognise nhi kr payega ki use kiska score increase krna hai
    islia ham this ko use krte hai, this mtlb jis, jis ne bi bulaya hai uska score 
    increase krdo*/

}   

createuser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}
const chai = new createuser("chai",25)
const tea = new createuser("tea",250)
/* abi isko bina new ke print krenge to error ayega (Cannot read properties of undefined (reading 'printMe'))
cuz hamne use prototype se define to kra hai to hamne jab chai main values dali to use 
pta nhi hai ki hamne additonal methods/properties define kri hai aur ye 
use pta chalega 'new' keyword ke through, islia new keyword ka bahut kaam hai, behind the scene*/
chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the
 constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the 
constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



// let's understand Prototype //
// Goal: 
// let myName = "hitesh    "
// let myChannel = "chai     "
// console.log(muName.truelenght)
/* abi ye undefined print krega kyuki ye hamne abi isse method banaya nhi 
hai, pehle ise hame ek method banana padega uske baad hamare liye ye kaam krega */


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
/*ham apni tarah se bi method inject kr skte hai*/
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}
/* hamne abi padha tha ki array,string,function, sab object se hoke jate hai
to kya hamra array hamare banaye hue method se access ho payega?*/

// heroPower.hitesh() // kr gya kaam
// myHeros.hitesh()
/* hamne crazy kaam kr diya hai, kudka ek method bana diya hai js main*/

/* ab ham dekhte hai ki jo power hamne array ko di hai kya vo object main jayegi?*/

Array.prototype.heyhitesh = function(){
    console.log(`hitesh says hello`);
}
// myHeros.hitesh()
// myHeros.heyhitesh()
// heroPower.heyhitesh()
/* hamare object ke pass access nohi hai kyuki property hamne array main define kri hai
aur prototype main pehle Array ata hai uske baad object ata hai aur object ke baad
null ata hai*/

// Inheritance (prototypal inheritance)

const user = {
    username: "hitesh",
    email: "hitesh@example.com"
}

const teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fillTime: true,
    __proto__:TeachingSupport
}

teacher.__proto__= user

// modern syntax
Object.setPrototypeOf(TeachingSupport , teacher)
/* ab ye dono ek doosre ke data ko access kr skte h*/

let anotherusername = 'chaiaurcode       '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
    
}
anotherusername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()