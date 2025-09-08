const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])//accessing elements of dc array
/* arrays koi bi data le lete hai chahe boolean ho number ho, anything
ismain bi isne sare dc elements ko individually add nhi kra hai balki poore array ko as 
a 4th element add kr diya hai ([ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]) */
const combineheros = marvel_heros.concat(dc_heros)
// console.log(combineheros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const allnewheros = [...marvel_heros,...dc_heros]

// console.log(allnewheros)
/*concat aur spread same kaam krte hai but prefer spread krna chaiye, marzi hai apni apni */

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)/*automatically poore array ko concatinate kr deta 
hai no matter kitte array ke andar array ho. depth aap define kr skte ho aur infinity bi likh skte ho jisse vo jitne bi hai sabko apne aap concat kr de*/
// console.log(real_another_array)


 /* Most of the time When we do web scaping from a website the data comes in string form or another 
  form so this converts that form into array */

  console.log(Array.isArray("hitesh"))
  console.log(Array.from("hitesh"))//this converts String or any other datatype data into arrays

  console.log(Array.from({name: "hitesh"}))// system empty array dega cuz defined nhi hai ki keys ka array banana hia ya value ka

  let score = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score,score2,score3));//Returns a new array from a set of elements
  



