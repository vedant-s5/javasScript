// Immediately Invoked Function Expression (IIFE)

/* kabi jab ham ek folkder banate hai jisme sirf ham apna databse connection rkhte hai
to ham ye chahte hai ki jaise hi website open ho vo ekdam se us folder main 
jake hamara database usse connect kr de, islia bi ham (IIFE) use krte h
aur jab ham function define krte hai to global scope ki vjha se
vo interrupt ho jate hai to, global scope hamare func main koi pollution create na kre
islia bi ham (IIFE) use krte hai*/

(function chai(){
    // this is a NAMED IIFE kyuki iska name hai
    console.log(`DB CONNECTED`)
}) (); /* agar ham function ke around parenthesis na lagaye toh phir
age wale parenthesis error denge islia hamne jo arrow main padha tha
ki object ko () ismain lock kr denge to vo sai hai*/

// () function ko define krenge aur 2nd () main ham execution krenge

// arrow func ki tarh bi likh skte hai

( () => {
    //this is a simple IIFE
    console.log(`DB CONNECTED TWO`)    
}) ()
/* ye error islia dera hai ki hamne pehle wala func define kr diya hai
but aur usse easily run kr diya hai ekdam se bas ismain hame pehle wale func ko end
krna padta hai kyuki js ne usse start kr diya hai lekin usse nhi pta end kab krna hai
to end krne ke lia ye (;) use krna hota hai.
to ham ARROW FUNCTION bi use kr skte hai IIFE main */ 


((name) => {
    console.log(`DB CONNECTED TWO ${name}`)    
}) ('hitesh')