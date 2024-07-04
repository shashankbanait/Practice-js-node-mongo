function add(a, b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function square(val){
    return val * val;
}

function composeTwoFunction(fn1, fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    }
}

const task = composeTwoFunction(add, square);

console.log(task(2,3));