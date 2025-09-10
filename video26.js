// if 

if (false) {
    // nothing will execute in this scope
}

// *************************** //

const isuserloggedin = true
if (isuserloggedin) {
    console.log("executed")
}

// <, >, <=, >=, ==, !=, ===(ye hamara datatype bi check krta hai),

//**************************//

const temperature = 41
if (temperature < 50) {// yha 40 kr denge to else wala statement execute hoga
    console.log("less than 50")
} 
else {
// console.log("temperature is greater than 50")//ye execute krega hi krega iska if statement se koi nata nhi hai
}

//*************************//

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power ${power}`) 
    /*is ke andar isse execute krege to koi prob nhi ayegi but agar if statement
    ke bahar isse execute krenge to error de dega kyuki phir scope 
    wala concept aa jata hai*/
}
console.log(`user power ${power}`) 


// short hand notation

const balance = 1000
if (balance > 500) console.log("test"), 
// /*comma lagage multiple line bi likh skte hai lekin jab end krenge toh semicolon 
// lagana zaruri hai */
console.log("test2"); // ye practice sai nhi hai ye na hi kro to best h

if (balance < 500) {
    console.log("less than 500")
}
else if (balance < 750){
    console.log("less than 750")
}
else if (balance < 900){
    console.log("less than 1200")
}
else {
    console.log("less than 1200")
}


// **************************** //

const userLoogedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoogedin && debitCard ) {
    console.log("allowed to buy courses")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in")
}


// *************** SWITCH **************** //

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("default case match")
        break;
}

/* agar kisi case main break nhi lagaya to uske baad ka sara code 
execute ho jayega except default wala part */

/* agar string match krana hai toh simple string deke case wali side number ki 
jagah string enter krdo, example- */

const month_str = "march"

switch (month_str) {
    case "jan":
        console.log("yes")
        break;
    case "feb":
        console.log("yes")
        break;
    case "march":
        console.log("yes")
        break;
    case "april":
        console.log("yes")
        break;

    default:
        console.log("no match")
        break;
}


// ****************** TRUTHY AND FASLEY VALUES ************** //

/* ismain ham values ko tru aur false assume kr lete h */

const userEmail = []

if (userEmail) {
    /* ismain hamen koi value comaprision nhi kra hai just hamne apne variable ka nam likha hai
    aur usne assume kr lia ki given string value true hai to if main ghusega verna vo else statement main
    ghusta, agar ham empty string dalte to else statement main ghus jata vo, and 
    if empty array dalte to vo true value return krta aur if statement main ghusta */
    console.log("got user email")
}
else{
    console.log("don't have user email")
}

/* FALSEY values-
    false, 0, -0, bigInt main 0n, null, undefined, NaN 
    
    in sabke alawa baki sab TRUTHY values hai

TURTHY values-
    "0", "false", " "(empty string ke andar space and empty string nhi hai ye),
     [], function(){} (empty function), */


// if (userEmail.length === 0){
//     console.log("Array is empty")
// }


const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty")
}

/* for knowladge- 
    false == 0 //true
    false == '' // true
    0 == '' // true
*/

// Nullish coalescing operator (??): null, undefined

let val1;

val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15 // 10
/* mtlb jo bi pehle value milegi vo assign ho jati hai, ye function
maily null aur undefined ke lia hi banaya hai */
console.log(val1)

// Terniary operator

// condition ? true(statement) : false(statement)

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")