/* java script is Dynamically typed language */

/* there are officially two types of datatypes, primitve and non-primitive
datatypes, kis tarah se data ko memory main rakha jata hai aur kis tarah se access 
kia jata h us basis pe datatypes defined hai*/

// PRIMITIVE DATATYPES(call by value) //

/* 7 catagories: String, Number, Boolean, null, undefined, 
Symbol(kisi bi value ko unique banane ke liye use krte hai), 
BigInt */
const name = "vedant"
const score = 100
const scorevalue = 100.3
const isloggedin = false
const temp = null//doesnt mean that value is zero, it si just null
let userEmail;//undefined
const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id === anotherid)
const BigNumber = 2345678908765n



// NON-PRIMITIVE DATATYPES OR REFERENCE//

/* Array, Objects, Functions */

const heros = ["iron man","hulk","spider man"]//this is an array
// objects are written in curly braces 
let obj = {
    name: "vedant",
    age: 19,
    roll_no: 175
}

//function

const myfunction = function(){
    console.log("hello world")
}

console.log(typeof name)//string
console.log(typeof score)//number
console.log(typeof temp)// it has null value and its dtype is object
console.log(typeof myfunction)//function
console.log(typeof obj)//object
console.log(typeof heros)//object














