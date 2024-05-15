const firstName = "sara";
console.log(typeof firstName)   // output: string

const rollNo = 20;
console.log(typeof rollNo)      // output: number

const hasPen = true;
console.log(typeof hasPen)      // output: boolean

const apartmentNumber = null 
console.log(typeof apartmentNumber)     // output: object

const score = undefined; 
console.log(typeof score)   // output: undefined

// Symbol
const id = Symbol("id");
console.log(typeof id);     // output: symbol

// bigint
const n = 293247927347929374927497n;
console.log(typeof n);          // output: bigint

// Reference type
const numbers = [1,2,3,4,5,6,7,8]
console.log(typeof numbers)         // output: object

const person = {
    name: "jack"
}
console.log(typeof person)          // output: object

function sayHello(){
    console.log("hello");
}
console.log(typeof sayHello)        // output: function