//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Vats",
    "full name": "Vats S. Shah",
    [mySym]: "myKey1",
    age: 19,
    email: "vatssshah04@gmail.com",
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

//in objects you can define keys and values as well
console.log(JsUser["email"])
console.log(typeof JsUser.mySym);
JsUser.age=20
Object.freeze(JsUser)
JsUser.age= 21
console.log(JsUser[age]);

JsUser.greeting= function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);  
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


const hingeUser = new Object()
hingeUser.id = "shalu123"
hingeUser.name = "Dhruv"
hingeUser.isLoggedIn = "true"

//nesting objects 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vats",
            lastname: "Shah"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "v", 2:"a"}
const obj2 = {1: "t", 2:"s"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

//Objects destructuring and JSON API
const course={
    courseName: "FullstackDev",
    coursePrice: "999",
    courseInstructor : "vats",
};
const {courseInstructor: instructor}= course
console.log(courseInstructor);

