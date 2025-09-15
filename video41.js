                          // fetch API //

/* 
The Fetch API provides an interface for fetching resources (including across the network).
 It is a more powerful and flexible replacement for XMLHttpRequest.
*/

/*
A fetch() promise only rejects when a network error is encountered 
(which is usually when there's a permissions issue or similar). 
A fetch() promise does not reject on HTTP errors (404, etc.). 
Instead, a then() handler must check the Response.ok and/or 
Response.status properties.
*/

/* 
hamne pichli video main padha the js engine ke bare main (video 37) to usmain 
setTimeout wale function ko call krke btaya tha ki vo kaise call hota hai phir
vo task queue main jata hai phir jab uski turn ati hai vo call stack ke andar 
chle jata hai aur vha se nikal jata hai, to usmain fetch bi use hua tha aur uski 
ek apni alag queue banti hai jiska name micro task queue ya priority queue bi bolte hai
to ye queue jo hoti hai task queue ke comaparison main bahut fast hoti hai, jo bi fetch 
through call hua hai vo task queue ke element s se pehle hi call stack main jake
execute ho jayega, sabse fast queue hoti hai ye aur sirf fetch ke lia hi ye special
queue banti hai.
*/

/*
fetch interanlly do part main kaam krta hai 1. web browser and 2nd part jo jata hai vo 
variable ko ya data ke liye memory main space reserve krne ke lia jata hai

2nd part main sabse pehle jata hai data ya kuch bi name ho skta hai variable ka, uske lia space reserve krne
jata hai aur phir uske andar hote hai onfullfilled [] and onrejection [] ye variable names hai but jo fulfill wala 
hai vo hai promise ka resolve jo ham use krte hai aur rejection wala hai promise ka 
reject jo ham use krte hai, lekin ham inhe access nhi kr skte hai, hamari range main hi nhi hai inhe acces krna
aur inko manupilate krna, ye private fields hoti hai yha tak ki data bi private field hoti hai

ab web browser kya krta hai-
ye hamari web base api handle krega aur yha se jati hai ek network request, netork req tabi jayegi
jaba hamara web browser koi resource dega ya data dega, uske baad ya to to req accept hogi aur agar kaam nhi hua 
to reject hogi agar network se koi bi respose ayega to vo onfulfilled pe hi jayega hamesha, agar eq ja hi nhi payi 
ya kisi reason ki vjha se req ruk gyi to phir vo jayegi onRejection pe, yha tak ki agar network ne response 
main error 404 tak diya to vo bi onFullFilled pe hi jayega, kyuki req pahuchi hai uski ke baad to usne btaya ki error aya
hai mtlb kuch na kuch to response aya hai vha se
*/

/*
jaise hi network se sab info aa jayegi ya nhi ayegi, uske baad jo onfullfilled hai aur onrejection hai usmain se jo bi hua hai 
vo jayega data main, aur in dono ke andar bi functions hi hote hai, phir uske baad jo bi data main gya hai vo hame dikh jayega 
kyuki hamne ek variable banaya tha response ke name se to vo sab data response ke through milega hame
*/


