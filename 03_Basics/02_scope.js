let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);

//the reason for using let const and var is because when scope aka {} is used problem arises

let j=300
if(true){
    let j=10
    const d=20
    console.log("INNER:", a);
}

//Scope level and mini hoisting 
function one(){
    const username ="vats"
    function two (){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    
    two ()
}
//here an error will be thrown since website is defined within the second function
 
