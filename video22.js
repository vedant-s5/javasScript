/* closure is a kind of technique, uske liye hame DOM ana chaiye 
 document object modle, mtlb kais ham html ke web pages ko manupilate
 kr skte hia js ko use krke*/

 // nested scope

 function one(){
    const username = "hitesh"

    function two(){
        const website = "yoututbe"
        //console.log(username)
    }
    //console.log(website)
    /* ye error throw krega cuz bada function chote function
    ki chizo ko acces nhi kr skta but chota func bade func ki chizo ko access kr skta 
    hai kyuki chote func ke liye bada func hi global scope hai aur bade func ke liye
    chota func block scope hai*/
    //two()// ye hame hitesh output dega, kyuki console.log ke andar hamne username ko call kra hai
 }
 //one()


 if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        //console.log(username + website) 
        /*sirf isse run krenge to apna code ekdam mast run krega 
        kyuki apan isse aram se 2nd and 1st is statement main access kr skte hai*/
    }
    //console.log(website)
    /*yha per bi ye error dega kyuki website ko access krne ka scope hi
    doosre if statement ke andar tha uske bahar ham use access hi nhi
    kr skte h */
 }
 //console.log(username) 
 /* same isi ke sath bi hoga ham isse 1st if statement ke bahar 
 access hi ni kr skte*/


 // ++++++++++++++++++++++ interesting ++++++++++++++++++++ //


addOne(5) /* is func declaration main agar ham func ke upper ya khi aur cal krte h
to bi vo correct output dega */
 function addOne(num){
    return num + 1
 }
// addOne(5)//ismain value sirf return hui hai print kuch nhi hoga 


//++++++++ 2sri tarah se +++++++++++ //


console.log(addTwo(5))/*lekin agar ismain ham upper ya khi aur call kre to phir
error aa jayega, bas ye diff h in dono main*/
const addTwo = function(num){
    return num + 2
} 
// addTwo(5)// ye bi same hi krega, value return hui h bu tprint nhi hui hai

/* Functions hamare in do tariko se define hote hai bas jaise hamne doosra wala 
define kra hai usko apan kabi kabi expression bi bol dete hai cuz hamne variable 
define krke function banaya hai, hai same chiz hi*/




