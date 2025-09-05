/* there are two types of memories: stack and heap 
 Stack memory is used in primitive dtypes
 Heap memory is used in non-primitive dtypes */
/* stack main hame jo bi variable define krte hai uski ek
copy milti hai, to jo change krenge vo copy main change hoga 
and HEAP main hame orginal value ka reference milta hai, mtlb jo bi 
apan change krenge vo original value main change krenge */
// STACK //
let myName ="vedant singh"
let anothermame = myName
anothermame = "vedant singh rajput"
console.log(myName)
console.log(anothermame)
/* anothername ke andar jo value gyi hai vo myName se gyi hai but vo uski value ki ek
copy gyi hai original wali nhi gyi hai, toh jo change hoga vo copy main hoga
original value main nhi hoga*/
// HEAP //
let user1 = {
    email: "user1@google.com",
    upi_id: "user1@upi"
}
let user2 = user1
user2.email = "user2@google.com"
console.log(user1.email)
console.log(user2.email)
/* ismain dono ka output same ayega cuz user2 ko user1 ki original value ka direct 
reference mila h kyuki ye heap main store hue hai 
aur change firect original value main hoga islia dono user1 and user2 ki value same ayegi */


 