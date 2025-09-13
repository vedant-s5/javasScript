// Some other types of loop, array specific loop

// 1. "for of" loop

const arr = [1,2,3,4,5]

// for (const num of object) { 
//     /* num is same like index/i, object se mtlb yha pe ye hai i
//     loop kispe lagana hai necessary nhi hai ki sirf object pe lagega*/
// }

for (const num of arr) {
    // console.log(num)
}

const greetings = "hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        continue  
    }
    // console.log(greet)
}

// Maps

const map = new Map()
map.set("IN","India")
map.set("IN","India")
map.set("USA","united states of america")
map.set("Fr","France")
// console.log(map)
/* map main unique values rehti hai aur usi order main rehti hai
jis order main hamne vo enter kri hai, duplicate values ko vo consider
nhi krta hai */

for (const key of map) {
    // console.log(key)
}
// ye poora array print kr dega
/* [ 'IN', 'India' ]
[ 'USA', 'united states of america' ]
[ 'Fr', 'France' ] */

for (const [key,value] of map) {
    // console.log(key, ":-", value)
}


// Object pe for of loop lagage dkhte hai

// const myObj = {
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// for (const [key,value] of myObj) {
//     console.log(key, ":-", value)
// }
/*ye error throw krega, kahega ki myObj is not iterable
chahe kais bi likhe, agar keys ko bina quotes ke likhenge 
tabh bi same error ayega */


// Object ke andar loop lagate hai (for in loop)

const myObj1 = {
    js:"javascript",
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObj1) {
    // console.log(key) // sari keys print ho jayengi
        
}


for (const key in myObj1) {
    // console.log(myObj1[key]) // sari values print ho jayengi
        
}


for (const key in myObj1) {
    // console.log(`${key} shortcut is for ${myObj1[key]}`) // sari keys,values print ho jayengi
        
}


// ab ham ye dekhenge ki for in loop arrays pe kaam kr skte hai ya nhi

const programming = ["js","rb","py","java","cpp"]
/*arrays ki jo keys hoti hai vo by default numbers hi hote hai'
aur for in loop arrays ki keys uthata hai jabki for of main
direct vo values hi utha rha tha */

for (const key in programming) {
    // console.log(programming[key]) // ye values de dega hame array ki
}


// ab for in loop map pe lagake dekhte hai

const map_1 = new Map()
map.set("IN","India")
map.set("IN","India")
map.set("USA","united states of america")
map.set("Fr","France")

for (const key in map) {
    // console.log(key)
}
/* Map is not iterable, islia hame ye koi output nhi dega*/


/******************for each loop****************************/

// ye loop ham sabse jada use krenge arrays ke lia 
/*forEach loop by defaultly arrays ke methods ke andar add kr rkha 
hai, jaise myarr.forEach(), aise ham use use krte hai */


const coding = ["js","ruby","python","java","cpp"]
/*yha pe func ko call back kha gya hai to ham ismain func ka 
name nhi likhte hai*/

/* ye loop array pe ek ek krke apne aap jaye hame parameter 
dene ki need nhi hai parenthesis main hame usko nam kya
dena hai vo likhenge*/

/* ye func automaticallt execute hoga aur ek ek krke value ko item ke
andar leke ayega as a parameter */

// coding.forEach( function (item) {
//     console.log(item);
// } )


/* arrow function main hi ham func ka name nhi denge firect parameter wale parenthesis main
apni taraf se kuch bi name denge jisse vo har value ko as a parameter apne andar layega */

// coding.forEach( (val) => { //  yha hamne same chiz kri h arrow func use krke
//     console.log(val)
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe) // ye bi hamari array ki values ko automatically print kr dega 


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

/* output
    js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
python 2 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
java 3 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp' ] 
*/


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
} )
/* ab jaise hamne array main har object ka name item bol 
diya hai to ab vo array main har obj pe item ke name se value lega 
aur hame uske access dega values ka */




