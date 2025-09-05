// NUMBERS AND MATHS //

const score = 100
console.log(score)

const balance = new Number(100)/* ismain hamne specially define krke likha hai ki 
jo enter kra hai vo number hi hai jabki uper wala system ke through predefined hai ki vo number hai*/
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))//ye kitti decimal values tak hame show krna hai vo define krti hai

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))/*returns a string type of value,
and iska mtlb hai ki jitti value ham isse denge vo utti value ka hi output dene 
ki koshis krega round off krke and start krega left side se, agar value perentesis main given number
ko decimal se pehle jo values hai unhe exceed krti hai to error ayega*/
//example
const newNumber = 1123.8966
console.log(newNumber.toPrecision(3))//this will give an error value
console.log(newNumber.toPrecision(4))//no error value//1124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))//ye commas add kr dega for easy reading

//***********************MATHS***********************//

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.sqrt(4))
// console.log(Math.max(30,24,16,67,23))
// console.log(Math.min(30,24,16,67,23))

console.log(Math.random())/*math.random is value hamesha 0 se 1 ke bich main ayegi*/
console.log((Math.random()*10) + 1)/* ab ye hamesha value 1 se 10 ke bich main dega*/
console.log(Math.floor(Math.random()*10) + 1)/*ye ab floor values deag 1 t0 10, means 
ab decimal values nhi ayegi ab*/

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)//ab ye hame 10 se 20 ke bich main values dega
