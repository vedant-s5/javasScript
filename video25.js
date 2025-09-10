 // Java script execution context // java script hamare program ko execute kaise kregi

 /* hamne js ko koi code diya to global execution context
 to banega hi banega aur isse sabse pehle this ke andar locate kia jata hai*/

/* js ek single thread lang hai jo mtlb js main har 
chiz ek process h */

/* ek aur execution context hota hai - function execution context */

/* hamara code 2 phases main execute hota hai-
memory creation phase and execution phase
memory creation phase main hamare variable ko moemory main ajagh assign hoti hai
and execution phase main hamare sare operation process hote hai
jaise +,- ya jo bi hai */

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

/* step 1 - global execution  
step 2- memory phase-
        a. val1 - undefined
        b. val2 - undefined 
        c. addNum - definition (func ke nadar jo bi hai vo poora 
        add num ke andar memory main store ho jayega) 
        result1 - undefined 
        result2 - undefined 
        (memory creation phase is completed)
        
step 3- execution phase-
        val1 - 10 
        val2 - 5
        addNum - main kuch kaam nhi hoga kyuki koi value hai hi nhi
        hamne usko(function) define krna tha vo ham memory phase main kr chuke hai
        to iska yha koi kaam nhi hai
        addNum - apna ek alag execution context banata hai
         sabse pehle yha baneha new vairable environment and execution thread
         ab yha pe wapas 2 kaam honge, memory phase and execution phase 
         bas is baar ye dono addNum ke lia execute honge, aur ab ye environment 
         apan ne function ke andar kya hora hai uske lia banaya hai toh 
         ab function ke andar kya hora hai usko ham 2 phases main execute krenge
         
         a. memory phase-
            val1 - undefined
            val2 - undefined
            total - undefined 
        
         b. execution phase-
            num1 - 10
            num2 - 5
            total - 15 ab ye jo total value hai ye hamari execute hogi 
            global context main jake return ho jayega kyuki jo hamne likha hai vo dikhana toh hai
            na hame islia vo vha chli jayegi
            
            AB YE JO NAYA ENVIRONMENT BANA THA YE POORA KAAM HONE
            KE BAAD APNE AAP DELETE BI HO JATA HAI
            
            AB HAM WAPAS APNE ORIGINAL WALE EXECUTION PHASE MAIN CHLE JAYENGE YHA
            KA SARA KAAM HO CHUKA HAI
            
           
            d. result - 15
            e. result2 - wapas se ab new variable environment banega + thread
            
                    a. memory phase-
                        val1- undefined
                        val2- undefined
                        total- undefined
                    
                    b. execution phase-
                        num1 - 10
                        num2 - 2
                        total - 12
                        ab vhi same chize repeat hongi return and deletion */


// CALL STACK (LAST IN FIRST OUT)
/* ab hamne kuch methods define kre aur unko call kra to vo
sabse pehele call hoke jayega global execution context main phit uske baad vha se
bahar nikal jayega, aur agar multiple methoods ko ek sath call krenge to vo andar to jayenge
lekin jo sabase last main method jayega vo sabse pehle us environment se bahar niklega */

function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()

/* isko jab ham browser main source main run krke dekhenge to visually 
poora call stack ka meaning samjh aa jayega */




 