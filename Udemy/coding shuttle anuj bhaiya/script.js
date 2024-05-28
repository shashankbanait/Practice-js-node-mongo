// A callback is a function passed as an argument to another function
function getCheese(callback){
    setTimeout(()=>{
        const cheese = "🧀";
        console.log("here is cheese: "+ cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback){
    setTimeout(() => {
        const dough = cheese + "🥮";
        console.log("here is the dough", dough)
        callback(dough);
    }, 2000);
}


function bakePizza(dough, callback){
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza)
        callback(pizza)
    }, 2000);
}

getCheese((cheese)=>{
    makeDough(cheese, (dough)=>{
        bakePizza(dough, (pizza)=>{
            console.log("got my pizza", pizza)
        })
    })
})

getCheese((cheese)=>{
    console.log("I got the cheese" + cheese);
})











// function printCheese(callback){
//     const cheese = "🧀"
//     console.log("say " + cheese);
//     callback(cheese);
// }

// printCheese((cheese) => {
//     console.log("this is cheese "+ cheese)
// })







