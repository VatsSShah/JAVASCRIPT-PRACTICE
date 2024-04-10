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
