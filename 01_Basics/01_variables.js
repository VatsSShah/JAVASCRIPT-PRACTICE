const accountId = 144533
let accountEmail = "vatssshah04@gmail.com"
var accountPassword = "12345"
accountCity= "Mumbai"
let accountState;

// accountId = 2 //not allowed 
accountEmail = "hc@hc.com"
accountPassword = "212213"
accountCity = "Jaipur"

/*Prefer not to use var because of issue in functional scope and block scope*/

console.log(accountId);
console.table([accountEmail,accountId,accountCity,accountPassword,accountState])
