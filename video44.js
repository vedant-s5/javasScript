/* abi ham padhenge call ke bare main to uske kuch prerequisite knowladge dekhte hai*/

/* hamare pass ek execution context hai uske andar sabse pehle ata hai gloabal EC phir
ek function banaya uska EC phir ek aur banaya, uska EC phir hamen ek aur 
func banaya but us func ke andar ek aur func call kra hamne callme()
to ab iske andar this kisko refer krega ye dikkat hai kyuki iske lia current context 
to vohi function hai jiske andar hamne use define kra hai lekin call to kisi aur ko 
krre hai, to ye hamare global context ko refer krega but ab ham dekhte hai ki isse resolve kaise
krenge*/

function setUsername(username){
    this.username = username
    console.log("called")
}

function createuser(username,email,password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createuser("chai","chai@fb.com","123")
console.log(chai);

/* ab kahani vhi hai ki hamne username set krne ka kaam pehle funtion
ko de diya hai aur vo username ham 2nd function main access krne chaha rhe hai
lekin hamne usse call to kr lia hai but hame vo abi username dega nhi 
vo call to hua hai mtlb upper wala function execute to hua hai aur but 
username diye bina hi vo kahani se hat gya hai mtlb chla gya hai, uske lia 
ham setusername.call(username) use krenge lekin abi bi hamara kaam nhi hoga 
same chiz hogi, ki banega to lekin banke bhag jayega hame milega nhi,
ye islia hai cuz we know that ki har context ka ek apna this keyword hota hai
to ham upper wale function ko bolenge ki bhai dekh tu apna nhi mera this use kr 
aur muje username set krke username muje dede aur tu chla ja, to vo yahi krega
2nd func ka this use krke hame apni sari values deke chla jayga ki uski sari values 
hamari hai ab vo jara hai*/
