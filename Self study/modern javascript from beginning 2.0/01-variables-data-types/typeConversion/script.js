let amount = "100";
console.log(amount, typeof amount);
// first way
amount = parseInt(amount);
console.log(amount, typeof amount);


// second way
amount = "100";
console.log(amount, typeof amount)
amount = +amount;
console.log(amount, typeof amount)

// third way
amount = "100"
console.log(amount, typeof amount)
amount = Number(amount)
console.log(amount, typeof amount)


// Change number to string
amount = 400;
console.log(amount, typeof amount)
amount = amount.toString();
console.log(amount, typeof amount)

// second way to convert number to string
amount = 400;
console.log(amount, typeof amount);
amount = String(amount);
console.log(amount, typeof amount)

// Change string to decimal
amount = "877.46643";
console.log(amount, typeof amount);
amount = parseFloat(amount);
console.log(amount, typeof amount);

// convert number to boolean 
let num = 1;
console.log(num, typeof num);
num = Boolean(num)
console.log(num, typeof num);


let n = 'hello';
n = parseInt(n);    // NaN
console.log(n, typeof n)    // output: Nan 'number'

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined)
console.log("hello" / 2 )