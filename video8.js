console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
// java script ne automatically string ko number main convert kr dia hai

console.log(null >0);// false
console.log(null == 0);//false
console.log(null >= 0);//true

/* the reason of those output is that this quality check(==) and 
comaprision (>,<,>=<<=) work differently.
comaparision converts null to a number treating it as zero.
that's why (3)null >= 0 is true and (1)null > 0 is false.*/

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
// always gives false when we compare using undefined

// Strict check (===)
console.log("2" == 2);// ismain true dega cuz ismain string number main apne aap convert ho jata hai
console.log("2" === 2);/* ismain false dega cuz hamne strict check(===) use kra h aur ismain ye value ka 
datatype bi check krta h*/





