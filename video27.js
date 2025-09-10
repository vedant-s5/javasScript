// ITERATIONS(LOOPS) //

// FOR LOOP //

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    // console.log(element)
}
//console.log(element) //element ka bahar koi acces nhi hai block scope ke andar hi acces hai


for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number")
    }
    // console.log(element)
}

// printing tables from 1 to 10 simultaneously 
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`)
        // console.log(i + 'x' + j + ' = ' + i*j)
    }   
}

// printing an Array
let myArray = ["flash","batman","superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// break and continue keyword

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        // console.log("detected 5")
        break
    }
    // console.log(`value of i is ${index}`)
}

// continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("detected 5")
        continue // continue bolta h ki ek bar ke lia apki value skip kr dete hai
    }
    console.log(`value of i is ${index}`)
}


