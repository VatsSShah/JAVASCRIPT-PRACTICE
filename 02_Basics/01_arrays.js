const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["ironman", "spiderman", "shaktiman"];

console.log(myArr[8]);
//when copying an array it creates a shallow copy- aka a copy whose properties share the same ref point (same as heap and stack to some extent)

//ARRAY METHODS

// Push method adds a value at the end
myArr.push(6);
myArr.push(7);

// Pop method removes the last value
myArr.pop();

// Unshift method inserts a value at the start of the array
myArr.unshift(9);

// Shift method removes the starting element of the array
myArr.shift();

// Output the modified array
console.log(myArr);

// Check if the array includes a specific value
console.log(myArr.includes(9));

// Joining the elements of the array into a string
const newArr = myArr.join();
console.log(typeof newArr);

// Slice and splice
console.log("A", myArr);

// Slice method returns a shallow copy of a portion of an array
const myn1 = myArr.slice(1, 3);
console.log(myn1);

// Output the original array to show it remains unchanged
console.log("B", myArr);

//printing splice (manipulates the original operation)
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

const marvelHeros = ["ironman", "thor", "hulk"]
const dcHeros = ["batman", "flash", "robin"]
marvelHeros.push(dcHeros)
console.log(marvelHeros);
//this won't help in merging the two arrays you use concat to merge
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros); //both the arrays will now be merged 

//spread operator (more preferable than concat)
const all_new_heros = [...marvelHeros, ...dcHeros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6],7,[6,7,[4,5]]]
let myusable_another_array = another_array.flat(Infinity)
console.log(myusable_another_array);

console.log(Array.isArray("vats"))
console.log(Array.from("vats")) 
console.log(Array.from({name: "vats"})) 

let score1 = 200
let score2 = 100
let score3 = 300
console.log(Array.of(score1, score2, score3));
