// Mathpi in js //

/* ab ham pi ki value ko dekhenge ki ham use overwrite kr pate hai ya 
nhi kr paate hai , kyuki vo to ek universal constant hai, agar overwrite krne
ki koshish krenge to nhi krega vo, original value hi print krega */
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const discriptor = Object.getOwnPropertyDescriptor(Math,"PI")
/* ye method ka kaam hai ki hame object ki kisi property 
ke bare main janna hai to ham isse use krte hai, jaise ismain 
muje math module main pi ke bare main janna hai*/

// console.log(discriptor);
/* output: 
        {
  value: 3.141592653589793,
  writable: false, ab ye property pi ki cpp main itti in dept false 
  kr rkhi hai ki ham isko kabi bi true kr hi nhi skte hai...
  enumerable: false,
  configurable: false
}
  */
 /* ham apna khud ka object create krke, usko bi ham hard code krke uski 
 usable properties ko false kr skte hai jis se ki agar koi aur hamari library use 
 kre toh vo hamare object ki properties ko overwrite na kr sake */

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}
// console.log(chai);

/*lets check ki hamare object ki properties hai aur agar 
 hai to ham unhe set kaise kr skte hai */

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*output:
        {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
/* ab object hamne banaya hai to ham uski properties ko change bi kr skte hai */
Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of chai) {
    console.log(`${keys}:${value}`);
}
/*abi is is saying that chai is not iterable, kyuki vo object hai, vaise 
object iterable hote hai but kuch situations main nhi hote jinki properties change
hoti hai to ab ham isko iterable banayenge*/

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`);
    /* ye krne ke baad hamara code enumerable hai, mtlb ab ham isse,
    iterate kr skte hai, abi hamara kuch cases main code fhat skta hai
    to ab ham use resolve krte hai*/
}

/* to abi hamne pane chai wale object main ek aur key define krke likhi hai 
but is bare vo key ke andar function hai to ab ham isse iterate krenge to hame 
poora ka poora function synatax print krke de dega ye 
name:ginger chai
price:250
isAvailable:true
orderChai:function(){
        console.log("chai nhi bani");
    } 

ise kehte hai code fatna, isse resolve krte hai
*/

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
 /* ab hamari situation handle ho gyi hai*/   
}
