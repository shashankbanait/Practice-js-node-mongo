let promise = new Promise(function(resolve, reject){
    alert("hello")
    resolve(56)
})


console.log("hello one")
setTimeout(() => {
    console.log("Hello two in 2 seconds")
}, 2000);
console.log("My namem is " + " Hello three ")
console.log(promise)