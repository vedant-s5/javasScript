// SCOPES //
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a)

}
console.log(a)
// console.log(b)
// console.log(c)
/* ismain ye a and b ke liye error dega which is correct cuz
a and b if ke andar defined hai to vo andar hi access kre jayenge
but is we print c it will give the output even if it is defined inside the if statement,
 islia var ko use use nhi krte apan*/
 /* if is a block scope and if ke bahar kuch bi likhenge to it is a global scope,
 global scope ki values block scope ke andar ja skti hai but block scope ki value
 uske bahar nhi jani chiaye*/


 /* browser ke console ke andar global scope alag hota hai
and jo ham code environment main node through run krte hai to vo global scope alag hai*/




  

