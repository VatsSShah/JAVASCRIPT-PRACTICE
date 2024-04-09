const name = "vats-vs"
const repoCount = 50
//console.log(name + repoCount + "Value"); outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
//latest syntax; string interpolation comes here (you make placeholders and directly inject the variables there)//

const gameName = new String('vatshc')
//string is an object here don't confuse it with an array
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //calculates the length 
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(3)); //kis index pe kaunsa character hai
console.log(gameName.indexOf(name)); //yeh character kis position/index pe aa raha hai

//Method of slicing 
const newString = gameName.substring(0, 4) 
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   vats    "
console.log(newStringOne);
console.log(newStringOne.trim());


