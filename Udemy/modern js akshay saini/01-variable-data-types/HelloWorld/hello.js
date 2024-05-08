const math = require("./math");     // require: jis file ke functions needed hai usko require ke ander likhte hai

console.log("Math value is:", math);     // to see what is it exporting
console.log("addition function calling: ", math.addFn(2, 4));
console.log("subtraction function calling: ", math.subFn(4, 1));