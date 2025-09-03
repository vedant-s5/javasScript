/* i want to make an e-commerce website using js thats why i am learning 
java script */
 const accountId = 123456
 let accountEmail = "veadnt@gmail.com"
 var accountPassword = "456789"
 accountcity = "Roorkee"

 /* 'const' - the value given with const cannot be changed, it is stored in 
 a variable 'accountId', the value assigned is now loacked in it and 
 cannot be changed.*/

 //accountId = 2// 
/* this thing is not allowed because it is assigned in const keyword
 .so, it cannot be changed, it will give error*/

 accountEmail = "singh@gamil.com"
 accountPassword = "4563"
 accountcity = "Haridwar"
 let accountState; /*java script main koi value define nhi krte hai to vo use undefined 
 likh deta hai */

 console.table([accountId,accountEmail,accountPassword,accountcity,accountState])
 /* agar hame multiple variable values ka output chaiye to bar bar console.log()
 likhne ki need nhi hai just use console.table([]) ye easily tabular form
 main print kr dega*/

 /* curly braces {} ko scope kaha jata hai, iski vajha se ham var use nhi krenge
 cuz pehle jab use krte the toh bar bar var wale variable main stored value 
 change ho jati thi(issue of block scope and functional scope) 
 islia ab ham sirf const and let use krenge*/



