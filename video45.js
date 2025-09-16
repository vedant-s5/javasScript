// modern syntax
/* constructor tab call hota hai, jaise hi class main ham object initialoze hota hai
aur new key word assign hota hai vaise hi apne aap constructor call ho jata hai */


// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){ // this is method created by us
//         return `${this.password}abc`
//     }
//     //aur methods bi add krte h ham
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// // behind the scene (without classes kaise krte ham)

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea","tea@gmail.com","123")
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// INHERITANCE //

// class User {
//     constructor(username){
//         this.username = username
//     }
//     logMe() {
//         console.log(`username is: ${this.username}`);
//     }
// }

// class teacher extends User { // ab teacher class user class ko access kr skti hai
//     constructor(username,email,password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addCourse (){
//         console.log(`new course was added by ${this.username}`);
        
//     }
// }
// /* ab ham jaise username ko doosri class se lare hai to hame call ya this vagera
// kuch use nhi krna padega cuz hame vo func main kri thi yha to classes hai aur uski
// properties doosri classes inherit krri hai to kya dikkat h bas hame upper 
// wali class se use call krna hai 'super' keyword use krke*/

// const chai = new teacher("chai","chai@teacher.com","123")
// chai.logMe()
// const masalachai = new User("masalachai")
// masalachai.logMe()
// /* instanceof ye check krne ke lia use hota hai ki jo hamne username banaya hai kya vo usi se bana hai*/
// console.log(chai instanceof teacher); // yes, true, it is a instance of teacher class
// console.log(chai instanceof User); // ye bi true hai ji



// STATIC PROPERTIES //

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);  
    }
    /* ab ham ye chahte hai ki jaise hi username create ho to use ek unique id mil jaye*/
    /* kai baar aisa hota hai ki ham koi object ka access kisi aur class ko nhi de skte jo 
    is class se instantiate hue hai mtlb is class ki extended class, uske lia ham static ko
    use krte hai*/ 
     static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())
/*agar mai ab ek unique id banane ki koshish krunga to vo muje error dega
(hitesh.createId is not a function) ye function hai but ye hamare lia ni hai
iska access hamare pass nhi hai ye*/

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()
iphone.createId()// error dega cuz vo kisi bi class ko access krne nhi dega







