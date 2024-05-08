// var a = 40;
// {
//     // Compound Statement
//     var a = 10;
//     console.log(a);
// }
// // a = 100;
// console.log(a);

//________________________________________

// var ka scope global hota hai
/*
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a)
    console.log(b)
    console.log(c)
}
// console.log(a)  // accessible
// console.log(b)      // Uncaught ReferenceError: b is not defined
// console.log(c)      // Uncaught ReferenceError: c is not defined
*/
//________________________________________

// var c = 100;
// function x(){
//     var c = 30;
//     console.log(window.c);
//     window.c = 20;
// }
// x();
// console.log(c);

//_______________________________________________
// Shadowing
// below example:
// let a = 20;
// {
//     var a = 20;     // upar let se a declare karenge to error aayega: Uncaught SyntaxError: Identifier 'a' has already been declared 
// }

// exxample 2:
// let a = 30;
// {
//     let a = 40;
//     console.log(a);     // legal, gives: 40, 30
// }
// console.log(a)


// exxample 3:
// var a = 30;
// {
//     let a = 40;
//     console.log(a);     // legal, output 40, 30
// }
// console.log(a)


// exxample 4:
// let a = 30;
// {
//     let a = 40;
//     console.log(a);     // legal, output: 40, 30
// }
// console.log(a)


// exxample 4:
// const a = 30;
// {
//     const a = 40;       // Uncaught SyntaxError: Identifier 'a' has already been declared
//     console.log(a);
// }
// console.log(a)


const a = 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a);
    }
    console.log(a);
}
console.log(a);