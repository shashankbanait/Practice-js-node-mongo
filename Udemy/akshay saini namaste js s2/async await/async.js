const p = new Promise((resolve, reject) => {
    resolve("Promise resolved value!");
});

// always  returns a promise
async function getData(){
    return p;
}

const dataPromise = getData();

dataPromise.then(res => console.log(res));