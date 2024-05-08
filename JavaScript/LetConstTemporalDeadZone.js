// let: 

// console.log(a);     // we will not be able to access a (which type is let) before it's initialization
// let a = 10;
// a = 100;
// a = 200;
// console.log(a)

//  b let= 100;
// let b = 20;         // gives error: Uncaught SyntaxError: Identifier 'a' has already been declared (at LetConstTemporalDeadZone.js:8:5)
// b = 50;          // Successfully executes: it will not give any error      
// console.log(b);

// // imp  : if a declare any variable using let then i can initialize it later


// var
// console.log(d)
// var d = 100;
// d = 200;
// var d = 400;
// console.log(b);    // gives the function as output
// function b(){
//     var c = 10;
// }

// // const
// console.log(b)
// const b = 1000;
// const b;
// b = 300;        // Uncaught TypeError: Assignment to constant variable.
// console.log(b);
// const b;    // Uncaught SyntaxError: Missing initializer in const declaration
// b = 4000;
// console.log(b);

// const b;        // Uncaught SyntaxError: Missing initializer in const declaration
// b = 100;