// ARROW FUNCTIONS //

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        //console.log(this);
        /* 'this' talks about current context */
        
    }
} /* 'this' keywords refers to the current context, 
means example: jo bi hamara abi yellow braces ke andar hai vo 
sab hamara current context hai*/
// user.welcomeMessage()
// user.username = "sam" // sam, welcome to website.
// user.welcomeMessage()
/* ye hame bina kisi error ke sam likh ke output dega
cuz hamne apne upper welcome wale func main likh tha this.username, means ki
jo bi current context main current value hai usse print kro */

//console.log(this)
/* this will return an empty object cuz ye hamare abi node environment
ke andar hai koi current context nhi hai iska aur pehle wale function ke bahar 
hai to iska usse koi mtlb nhi hai */ 



// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()
/*ismain hamara output undefined ayega, isko pta hi nhi hai ki ham
kis this.username ki baat kr rhe hai*/


//now we will learn how to declare more func specially using arrow fucntions

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()
/* ismain bi same undefined hi ayega */

const chai = () => { // ye hai arrow function
    let username = "hitesh"
    console.log(this)
}
chai()// ye bi this.username pe undefined dega and sirf this pe empty object dega

// ARROW //

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))
// ye ho gya hamara basic arrow function

// ek aur tarike se use krte hai ham arrow func ko use ham kehte hai implicit return

//const addTwo = (num1,num2) => num1 + num2
//const addTwo = (num1,num2) => (num1 + num2) 
/*agar ham curly braces use krenge to return
keyword likhna hi padega aur agar perenthesis use krenge to return keyword likhne ki
koi need nhi hai*/
// console.log(addTwo(3,4))

// agar hame ek obj return krna hai to ham kaise krenge

const addTwo = (num1,num2) => ({ussername: "hitesh"}) 
/* bina perenthesis lagaye ye hame undefined output dega islia ham jab obj return krenge
to hame ye () lagana zaruri h */
console.log(addTwo(3,4))





