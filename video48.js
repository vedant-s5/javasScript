// GETTERS AND SETTERS //

// ***************** CLASS BANAKE ******************** //

class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    /* ab ham ye chahte hai ki ham user ko password de hi na...
    aur agar hamr getter define krenge to setter bi define krna padega 
    dono sath hi at hai,verna to error milega hame,setter define nhi krenge to getter main value ja hi nhi payegi*/
    get password(){ // class ke bahar se koi value get krne chahte hai islia getter use hota hai
        return this._password.toUpperCase()
    }
    
    set password(value){
        this._password = value
        /* ab error nhi ayega cuz ab constructor value email ki set krra hai but,
        password ko hamne overwrite kr diya hai cuz value to getters aur setter main hi ayegi 
        age jake*/
    }
    /*ab agar ham password ki value bar bar set krenge kyuki constructor bi value
    set kr rha h aur getters aur setters bi vai krre hai to hame error de dega vo ki
    maximum call stack size exceeded kyuki bar bar constructor call hoga to vo confuse 
    ho jayega ki krna kya hai, ab ise resolve krte hai*/
    
}

const hitesh = new User("hitesh@gmail.com",'h@hitesh.ai')
console.log(hitesh.password);
console.log(hitesh.email)


/*abi hame ye passwrod easily return kr dega but ham chahte hai ki 
k agar koi isse access krne ki koshish kre to hamara system usse password na
de ya phri koi encrypted password return kre uske lia ham getters and setters use krte hai*/


/*//samjhne ke lia 
get password(){ 
        return this._password.toUpperCase()
    }
    
    set password(value){
        this._password = value
    }
ab setter main password ki value vaise hi save hogi jaisi hamne di hai, 
kyuki vo value hamne set kri hai aur jab koi use get krne ki koshish krega 
to use uppercase main milega sab cuz get main hamne use uppercase main kr diya hai*/

// ****************************FUNCTION BANAKE************************** //



/* Old syntax using function, cuz function bi hamara func ki tarah behave krta hai and
object ki tarah bi behave krta hai */

/* ismain hame password ke lia poora alag function 
banana padega object.defineproperty wali line se*/

function UserOne(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new UserOne("chai@gmail.com","hello@123")
console.log(chai.email);


// *************************OBJECT BANAKE****************************** //

// bahut purana tarika hai, ab koi bi use nhi krta ise

const UserTwo = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
/* ab ha, yha pe factory function use krenge, pehle new use krre the 
but vo constructor based func hai to ham yha direct object.create use krenge
aur use bolenge ki direct userTwo ke base pe ek object create kro aur values ka
access de do */ 
const tea = Object.create(UserTwo)
console.log(tea._email);









