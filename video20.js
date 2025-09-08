/* e-commerce websites main shopping carts hoti hai to 
we dont know ki user us cart main kitte chize add krega to usko dhyan
main rkhke hame use handle krna hai*/

// rest operator (...)

function CalculateCartPrice(...num1){
    return num1
}
console.log((CalculateCartPrice(200,300,400)))//[ 200, 300, 400 ]
/* by using rest operator ham given multiple values ko ek array ke 
form main print kra skte h, chahe jitni bi values ko user hamara enter kr de */

function CalculateCartPrice1(val1,val2,...num1){/*by using this parameters jo starting values h vo val1 and val2 main store hongi aur 
    age ki sari num1 main array ki form main store ho jayengi*/
    return num1
}
console.log((CalculateCartPrice1(200,300,400,500)))//[ 400, 500 ]

const user = {
    username: "hitesh",
    price: "199"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
/*ab agar ham object main price ki jagah prices likh denge to hame output main
price ki jagah undefined milega, to hame typo ka dhyan rkhna hai, cuz vo error nhi deta just undefined likh
ke pass kr dega hai*/

// ham direct object banake bi pass kr skte h values ko, jaise;

handleObject({
    username: "sam",
    price: "399"
})

//arrays bi pass kr skte hai

const myNewArray = [200,400,500,300]

function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myNewArray))



