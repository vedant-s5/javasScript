

// const coding = ["js","ruby","python","java","cpp"]

// const value = coding.forEach((item)=>{
//     return item
// })
// console.log(value)// ye hame undefined dega output
/* kai baar kya hota hai ki hame values print nhi krani hoti hai
bas hame return krani hoti hai, zaruri nhi ki har bar ham apane 
array se values print hi krayenge, unhe kuch aur kaam bi de sakte hai ham islia
ham ye kr dete hai */

// ******************* FILTER ******************* //

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter( (num) => num > 4 ) // filter bi call back hi leta hai
// console.log(newNums)
/* filter main kya hota hai ab, ham usse call abck value denge
uske baad hame usse conditon deni padegi ki usse kya filter krke dena hai
apne ko uske baad vo value return krega, ye filter ka basic hogya */

// ab kabi kabi galti ho jati hai vo kaise,

// let newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums)
/* ab ye hame empty array return krega kyuki hamne arrow func main 
sikha tha ki jab bi ham condition curly braces main lagake dete hai to hame 
return keyword ka use krna hi padta hai verna value return nhi hogi hamari, 
ab ismain ham return laga denge to baditya run ho jayega ye  */


// agar ham ye chiz forEach main krna chahe toh

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums) // bas ye thoda lamba pad jata hai



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

let userBooks = books.filter( (bk) => bk.genre === "History")
// console.log(userBooks)

/* OUTPUT-
        [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

userBooks = books.filter( (bk) => bk.publish >= 2000)
// console.log(userBooks)

userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History")
// console.log(userBooks)


// ******************* Map ********************** //

const MyNums_1 = [1,2,3,4,5,6,7,8,9,10]

// const NewNums_1 = MyNums_1.map((num) => num + 10)

// Concept of chaining 

const NewNums_1 = MyNums_1
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40 )
// console.log(NewNums_1)

/*pehli map condiiton jo pass hui hai usne ek naya array return
kr diya hai aur agli map condition automatically vo array use 
kregi jo pehli map condition main bani hai */ 
/* OUTPUT-
        [
  41, 51,  61, 71,
  81, 91, 101
]
*/


// ****************** REDUCE **************** //

const nums = [1,2,3]
const mytotal = nums.reduce(function (accumulator, currentvalue) {
    console.log(`acc: ${accumulator} and currval: ${currentvalue}`)
    return accumulator + currentvalue
}, 0)// 0 is initial value
console.log(mytotal)
/* OUTPUT- 
        acc: 0 and currval 1
        acc: 1 and currval 2
        acc: 3 and currval 3
*/

//ab isse arrow func ke through likhte hai

const my_total = nums.reduce( (accu,currval) => accu + currval, 0 )
console.log(my_total)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },

]


const PriceToPay = shoppingCart.reduce( (accu, item) => accu + item.price,0) 
console.log(PriceToPay)





