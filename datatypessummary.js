//***PRIMITIVE***//

// 7 Types: String, Number, Boolean, null, undefined, symbol, BigInt

//***NON PRIMITIVE/ REFERENCE***//
// Array, Objects, Functions

//***STACKED (Primitive) AND HEAP MEMORY (Non-Primitive)***//
//for stacked you get a copy and for heap you get a reference 
//STACKED MEMORY 
let myYoutubeName = "vatssshahdotcom"
let anotherName = myYoutubeName

anotherName = "thePassionProject"

console.log(anotherName);
console.log(myYoutubeName);

//HEAP MEMORY
let userOne = {
    email: "vatssshah04@gmail.com",
    UPIID: "user@hdfc"
}

let userTwo = userOne
userTwo.email = "vatssshah04@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
