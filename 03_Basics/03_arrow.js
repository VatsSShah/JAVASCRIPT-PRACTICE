const user = {
    username: "vats",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(user);

function chai(){
    let username = "vats";
    console.log(username);
}

chai();

const chaiFunc = function () {
    let username = "hitesh";
    console.log(username);
}

chaiFunc();

const chaiArrow = () => {
    let username = "hitesh";
    console.log(username);
}

chaiArrow();

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];

myArray.forEach(element => console.log(element));
