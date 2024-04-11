//Execution context means jabhi bhi hum apna function chalayenge function apna ek khud ka imaginary container banayega which will have 3 things:
// variable, function inside the parent function and lexical env of that function
//ye jo imaginary container hai we call that container execution context

//Lexical Environment- ek chart hota hai jisme likha hota hai ki aapka particular function kin cheezo ko access kar sakhta hai and kinko nahi, matlab it holds scope and scope chain

//How to copy reference values: by using the spread operator 
var a = [1, 2, 3, 4, 5];
var b = [...a] 
var c = [1,2,3,4,5,6,7,8,9]
var d = [...c]
//copying values of an object 
var obj = {name: "vats"};
var copyObj = {...obj};