                        // Promise statement in js //

/* jo bi task hamne promise ko diya hai vo abi ke abi queue main lagke
complete nhi hoga, queue main to lag gya h, but usse abi load nhi kia gya hai
complete nhi kia gya hai */

/* A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/
/* promise ek object hi hai */

const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() //connected with then
    },1000)
})
// resolve is a type of method which helps us to connect with then
/* ab hamara promise create ho gya hai ab usse consume krna hai*/
//then ka sidha connection hai resolve ke sath
/* then ke andar hame call back func milta hai jo automatically values
 ko leta hai aur une return krta hai*/
/* .then wale func ko run krne ke lia resolve aur .then ko connect krna 
 padta hai */

promiseOne.then(function(){
    console.log("Promise consumed");   
})


//ek aur tarike se kr skte hai ham isse

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async two resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email: "chai@example.com"})//is reolve ke andar parameter bi pass kr skte hai
    },1000)
})

promiseThree.then(function(user){
    console.log(user) // ye hamare parameters ko print krke dega 
})
/* aur jo upper hamne parameter pass kre the vo muje yha dikha jayenge then ke through */

/* ab hamne jo case lia hai vo hai ki jab error aye to reject bi rkna hota hai 
uske lia ham reject keyword ko use krenge uske baad ham promiseFour ko use krke 
.then() krenge to error nhi ayega to value de dega aur .catch() lagage error catch krke value de dega*/
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username:"hitesh",password:"123"})
        }
        else {
            reject('ERROR: something went wrong')            
        }
        
    },1000)
})
/* agar hame jha se ham data le rhe hai vha se data lena hai to ham then wale function 
ko vairable main assign krke direct use call krke value fetch nhi kr skte hai*/
promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("Promise is either rejecte or resolved."))
/* finally wala parth execute hoga hi hoga, ye ham islia use krte hai
ki apane program se puchne ke lia ki jo kaam maint krne ko bola 
the vo finally hua hai ya nhi aur jo bi hua hai use to de hi do*/
// catch use krna padega kyuki hamne upper error bi handle kr rkha hai upper hamne define kra tha
/* ye ham krre hai chaining, jo pehle wale then function main 
value return hogi vhi next then function main ayegi*/


/* zaruri nhi hai ki ham promise ko hamesha .then se use kre ham use asyncawait se bi kr skte hai */


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username:"Javascript",password:"123"})
        }
        else {
            reject('ERROR: Js went wrong')            
        }
        
    },1000)
})

/* async await wait krta h hamare promise ko to execute agar sab sai hai 
to vo given time ke lia wait krega aur hame data de dega aur gar bich main koi error ara h toh 
vahi ruk jayega aur error fek dega */
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response)
    }
    catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
/* async await ka ek dikkat hai ki vo error ko directly handle nhi kr skte hai
islia ham try catch block main error handle krte hai*/


// next class ki taiyari 

// async function getAllUsers() {
//    try {
//     const response = await fetch('http://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//     console.log(data)
//    } catch (error) {
//         console.log("E:",error)
//    }
// }
// getAllUsers()
/*hamare is code main koi bi dikkat nhi hai bas hame ye yaad rkhna hai ki
jab bi ham database se yah khi aur ka data fecth krte hai to time lagta hai
ekdam se hamare pass sab nhi aa jata, aur is poore data ko json main concvert krne
ke lia bi time lagega to islia ham response.json ko bi await krenge*/

// isi func to .then and .catch main krke dekhte hai

fetch('http://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})// is wale then ko handle krne ke lia ek aur then use krenge
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
/* ismain hame try catch use krne ki bi need nhi padi error handle krne ke lia
*/



