let score = undefined
//console.log(typeof score)
//console.log(typeof(score))
/* do tariko se value ka dtype pta laga skte hai ham*/
let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)
//"33abc" will give NaN value
// null value likhenge toh phir vo zero(0) output dega 
// undefined value likhenge to phir vo NaN output dega
// boolean value denge to 1 or 0 dega vo
//string dalenge to NaN value dega cuz string cannot be converted to number
/* summery:-
"33"=> 33
"33abc"=>NaN
true => 1;false=>0*/

let isloggedin = ""
let booleanisloggedin = Boolean(isloggedin)
//console.log(booleanisloggedin);
// 1 => true
//0 => false
// "vedant" => true
// " " => false

// changing to String
let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber);



