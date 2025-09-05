const name = "Vedant-vc"
const age = 19
// console.log(name + age)
console.log(`hello, my name is ${name} and my age is ${age}`)/* we must write 
our output line in this form, it is recommended*/

const gameName = new String("vedant-vc")//another way to define a String
 console.log(gameName[0])
 console.log(gameName.__proto__)
 console.log(gameName.length)
 console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("d"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)/*ham sirf slice ke andar negative value
use kr skte hai substring ke andar nhi kr skte, agr add krenge to obey nhi krega 
defaultly 0 se start kr dega*/
console.log(anotherString)

const newString1 = "     hitesh     "
console.log(newString1)
console.log(newString1.trim()) // read about trim on mdn

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-"))
console.log(url.includes("vedant"))

const array1 = "hello my name is vedant singh"
console.log(array1.split(" "))/* meri string main mainy spaces ke basis pe
split kra h toh vo spaces ko hatake poori string ko array k form main likh dega*/








