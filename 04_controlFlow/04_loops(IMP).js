//foreach loop sirf array par chalta so whenever you have an array to work on you use foreach loop
var a= [1,2,3,4,5,67,88,99];
a.forEach(function (val){
    console.log(val+2);  //val is a variable
})
//foreach loop kabhi bhi by default aapke array mein change nahi karta, woh aapko changes karke deta hai array ki temporary copy par jiski wajah se array hamesha same rehta hai

//FORIN LOO- Objects par loop karne ke liye use hota hai yeh
var obj={
    name:"vats",
    age:19,
    city:"mumbai"
}
for(var key in obj){
    console.log(key, obj[key]);
}

//DOWHILE loop
var a= 120;
do{
    console.log("hey");
    a++;
}
while(a<15)
