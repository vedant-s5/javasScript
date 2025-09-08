// destructuring of objects 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course //aise ham object ko destructure krte hai

console.log(instructor);// hitesh

  // intro to api
//   {
//     name: "hitesh",
//     age: 18,
//     email: "hitesh@gmail.com"
//   }

/* hame api ka data zaruri nhi hai hi ki hamesha object ke form main milega
vo hame arrays ki form main bi mil skta hai jiske andar multiple object honge aur 
unki branches hongi*/

// [
//     {},
//     {},
//     {}
// ]

// talked about little bit of Json
// json is java script object notation
//api ke liye object hame hamesha json format main hi bhejna padta hai

