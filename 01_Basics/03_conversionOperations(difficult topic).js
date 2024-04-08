let score = 33;
console.log(typeof score);
console.log(typeof(score)); //wrote as a method aka inside paranthesis ()

let valueInNumber = Number(score) //passed score in number 
console.log(typeof valueInNumber);

let isLoggedIn = 1; //when you convert an empty string i.e "" you get false
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); 

// 1 => true; 0 => false
// "" => false
// "vats" => true

let someNumber = 33
let stringNumber = String (someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//*******OPERATIONS*******//
let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " vats"
let str3 = str1 + str2
console.log(str3);

//problem arises here
console.log("1" + 2); //output is 12
console.log(1 + "2"); //output is 12
console.log("1" + 2 + 2); //output is 122
console.log(1 + 2 + "2"); //output is 32 (messy code pull request wont be merged)

let num1, num2, num3
num1= num2 = num3 = 2+2

let gameCounter = 100
gameCounter++; //can also be written as ++gameCounter
console.log(gameCounter);


