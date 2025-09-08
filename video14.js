// ARRAY
// arrays in js are resizable 
/* in Arrays we use shallow copies, means jo bi ham change 
krenge array main vo copy main nhi original array main change krenge just like(stack and heap) */

const myarr = [0, 1, 2, 3, 4, 5]
const myheros = ["ironman","captain","hulk"]
const myarr2 = new Array(1, 2, 3, 4)
//  console.log(myarr[1])

 // ARRAY METHODS

 myarr.push(6) // array main value add hogyi h
 myarr.push(7)
 myarr.pop()//removes last value of array(remove 7)

 myarr.unshift(9)/*ye array ke starting main value add krega, to baki 
 sari values ko shift krna padega islia computer pe load ata hai, thats why bahut log isse bekar consider krte h */
 myarr.shift() // ye sabse pehli wali value ko remove kr dega hai(9 remove kr dega)

// console.log(myarr.includes(9))//boolean type answer
// console.log(myarr.indexOf(9))// -1 ouput dega cuz 9 hai hi nhi to mtlb vo kehna chah rha hai ki bhai ye value to h hi nhi
// console.log(myarr.indexOf(3))

const newarr = myarr.join() //hamare array ke elements ko string main add kr dega

// console.log(myarr)
// console.log(newarr)// 0,1,2,3,4,5,6
// console.log(typeof newarr)// String

// Slice , Splice

console.log("A ", myarr)
const myn1 = myarr.slice(1,3)
console.log(myn1)
console.log("B", myarr)// original array

const myn2 = myarr.splice(1,3)/* splice main range bi include hogi, bas farak ye hai ki splice main
domain to range wala part poora hi original array se nikal jata h aur ek alag array bana deta hai
,means splice original array ko bi manupilate kr deta h*/
console.log(myn2)//[ 1, 2, 3 ]
console.log("C ", myarr)//C  [ 0, 4, 5, 6 ]



