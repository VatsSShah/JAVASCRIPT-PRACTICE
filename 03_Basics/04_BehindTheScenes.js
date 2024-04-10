//How Javascript works behind the scenes, let's take this code for eg:
let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)

//1. Global Execution (allocated under this)
//2. Memory Phase/Creation Phase: (saare variables ko collect karke rakha jaata hai; all variables will be taken and undefined rakha jaayega andar) addNum mein function ki definition jaayegi
//3. Execution Phase: values will be defined here line 4 to line 7 tak koi use nai since uski def already 2nd phase mein hold karke rakhi hai; addnum will make a different execution context

//Concept of Call Stacks: LIFO concept works= Last In First Out
