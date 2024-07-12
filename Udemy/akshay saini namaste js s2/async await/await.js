// async and await combo is used to handle promises
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value!")
    }, 10000);
});

// async can only be called  
async function handlePromise(){
    console.log("this will be printed when this functioin will be called")
    // await can only be used inside an async function
    const val = await p;
    console.log("namaste javascript")
    console.log(val)


    const val2 = await p;
    console.log("namaste javascript 2");
    console.log(val2)
};
handlePromise();
console.log("hi i am outside async function")
// function getData(){
//     p.then(res => console.log(res));
// }

// getData();