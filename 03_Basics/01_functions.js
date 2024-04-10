function addTwoNumbers(number1, number2){
    let result = number1+number2
    return result
}
addTwoNumbers(3+4);
const result = addTwoNumbers(3,5);
console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Vats"))

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());

//Functions with objects 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,300,500))

const user={
    username:"vats",
    price:"900"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
