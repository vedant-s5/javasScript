// FUNCTIONS //
/* jo bi hamne code likha hai 10 line ya jitne ka bi use hame ek
package main band kr diya hai, vo package jaha chahe jab chahe uski copies uthake
leke ja skte h*/

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1,number2){//these are parameters
//     console.log(number1+number2)
// }
// addTwoNumbers(3,4)//agar isko khali chorenge to NaN milega cuz hamne koi arguments pass hi nhi kra hai
// isko ham ek aur tarke se variable define krke bi likh skte hai
// const result = addTwoNumbers(3,5) // output dega but agar ham console main print krenge to undefined dega
// console.log(result)




// function addTwoNumbers(number1,number2){
//     let result = number1 + number2
//     return result
//     console.log("hitesh")//kuch nhi hoga cuz return ke baad code kaam nhi krta h uske aage ka 
// }
// const result = addTwoNumbers(3,5)
// console.log(result)




// ek aur tarika hai
function addTwoNumbers(number1,number2){
    
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log(result)




function loginUserMessage(username = "sam"){/*ham default value bi de skte hai yha pe, ki jab 
    koi user value pass hi na kre to yhi print ho jaye, phir ham if statement ke andar jayenge hi nhi*/
    if(username === undefined){/*is code ke equivalent ek aur code hoga vo if(!username){} 
        kaam same hi krega, kai jagah ye bi likha ho skta hai*/
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
/* bina console.log ke value return to hui hai mtlb
usmain hitesh store to ho gya hai but hamne use abi print krne ko nhi bol
 hai islia vo kuch print nhi krta hai aur error bi nhi deta*/

console.log(loginUserMessage())// kuch bi pass nhi krenge to error nhi dega balki undefined return krega





