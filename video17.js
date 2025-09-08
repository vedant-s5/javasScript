// objects ko 2 tariko se define kr skte hai literals ki tarah aur constructor ki tarah

// SINGLETON
// jab constructor se banate hai tab banta hia, mtlb ye apne tarah ka ek hi object hai

//********************************************** */

// const  tinderuser = new Object() // returns empty object {}, bas ye singleton object h

 const tinderuser = {} // this also returns empty object {}, ye non-singleton object h

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

// console.log(tinderuser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
} 

// console.log(regularuser.fullname)// poore obj ke obj ke andar jo hai sab print kr dia hai
// console.log(regularuser.fullname.userfullname.firstname)

//combining objects

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source2 = { d: 4, e: 5 }

const returnedTarget = Object.assign(target, source, source2);
// spread operator use krte h ab
const returnedTarget_2 = {...target,...source,...source2}
// console.log(returnedTarget);//{ a: 1, b: 4, c: 5, d: 4, e: 5 }
// console.log(returnedTarget_2)

const user = [
    {
        id: 1,
        email: "vedant@gamil.com"
    },
    {
        id: 1,
        email: "vedant@gamil.com"
    },
    {
        id: 1,
        email: "vedant@gamil.com"
    },
    {
        id: 1,
        email: "vedant@gamil.com"
    }
]

user[1].email

console.log(tinderuser);
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))// in dono ka return type array hoga
console.log(Object.entries(tinderuser));//ye keys and values ko seperate array main print krta h
// [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]

console.log(tinderuser.hasOwnProperty('isloggedin'));



