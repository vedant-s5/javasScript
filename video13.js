// DATE

let mydate = new Date()
console.log(mydate)/* ismain apan compare nhi kr payene easily ki konsi chiz specifically kya hai
to isamin ham aur kuch keywords use krenge for more precise info */
console.log(mydate.toString())/*isko use krke vo hame strings dega define krne ke liya more precise way main ki konsi chiz kya hai
 OUTPUT - Mon Sep 08 2025 20:13:15 GMT+0530 (India Standard Time)*/
 console.log(mydate.toDateString())// Mon Sep 08 2025
 console.log(mydate.toLocaleString())// 8/9/2025, 8:15:17 pm
 console.log(mydate.toISOString()) // 2025-09-08T14:46:31.770Z
 console.log(typeof mydate)// object type ayega cuz upper hamne as a object define kra hai ise 

 // manually date and time bi add kr skte hai ham

//let mycreateddate = new Date(2025, 0, 8)/* jab single digit main likhte hai month ka number to zero se start hota hai like 0
//  is for jan output - Wed Jan 08 2025 */
// let mycreateddate = new Date(2025, 0, 8, 5, 3) // 8/1/2025, 5:03:00 am
//let mycreateddate = new Date("2025-01-08")//format YYYY-MM-DD. jab is format main likhte hai toh month 1 se start hote hai like 01-Jan
let mycreateddate = new Date("01-14-2025")//format MM-DD-YYYY india main mainly ye wala format prefer krte hai
console.log(mycreateddate.toLocaleString())

//JAVA SCRIPT main time jo hai vo defaultly miliseconds main calculate hota hai
/* aur ham TimeStamp islia use krte hai jaise hame koi quiz banani hai aur uska winner decide krne hai
ya phir kisi hotel website main checkout checkin time compare krna hai */
// comparison hamesha miliseconds main krna chaiye 
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreateddate.getTime())
// ab hame agar seconds main consvert krna hai toh ham kya krenge
console.log(Math.floor(Date.now()/1000))//math floor islia use kra h jisse decimal value na aye

// Agar hame specifically koi month,date,year,day pta krna h uske liye bi methods hote h
let newdate = new Date() 
console.log(newdate.getTime())
console.log(newdate.getMonth() + 1)//agar apko exact month number chaiye islia,cuz defualtly 0 se start hota h na
console.log(newdate.getFullYear())
console.log(newdate.getHours())
console.log(newdate.getDay())

// ham apne output format ko aur bi jada customize kr skte hai

newdate.toLocaleString('default', {
    weekday: "long",
    timeZone: "GMT"
})




