// while and do while loop

let index = 0 // initializing value
while (index <= 10) { // giving conditon
    // console.log(`value of index is ${index}`)
    index += 2 // increment or decrement of the loop
}

// printing Array
let myArray = ["flash","batman","superman"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`)
    arr += 1
}

// do while loop
/* ismain condition sabse last main check hoti hai sabse pehle 
hamara kaam hota hai */

let score = 1 // initializing value
do {
    console.log(`score is ${score}`)
    score++ // increment and decrement of code
} while (score <= 10);// condition


let score1 = 11 // initializing value
do {
    console.log(`score is ${score}`)
    score++ // increment and decrement of code
} while (score <= 10);// condition

/* isse ham samajh skte hai ki hamara loop run pehle hota hai phir condition check hoti hai
aise hi yha pe 11 diya hamne but 11 to 10 se chota hai hi nhi
islia usne bas pehle 11 print kra phir condition check kri to favourable nhi thi to
vahi loop ruk gya */

