// Values are stored on the stack
const name = "john";
const age = 30;

// reference values are stored on heap
const person = {
    name: "brad",
    age: 40
}

let newName = name;
console.log(name, newName); // both are refering to the same value

console.log(person)
newPerson = person;
console.log(newPerson)

newPerson.name = "bradly"
console.log(newPerson, person)