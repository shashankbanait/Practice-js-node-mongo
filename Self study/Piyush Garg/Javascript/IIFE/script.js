// (function add(a, b){
//     console.log(a+b);
// })(2,3);

// //_________________________

// (function say(){
//     console.log("hey");
// })();

// //_________________________

// (()=> console.log("I am es6"))();

// //___________________________
// const value = (()=>100)();
// console.log(value);


// use of async await in IIFE function
// const data = (async () => await fetch())()

const atm = function(initialBalance){
    let balance = initialBalance;
    function withdraw(amt){
        if(amt > balance){
            return "Are you kiskldfjlkshjf";
        }
        else{
            balance -= amt;
            return balance;
        }
    }
    return {withdraw};
}

const myAccount = atm(1000);
console.log(myAccount.withdraw(100));
console.log(myAccount.withdraw(100));
console.log(myAccount.withdraw(100));