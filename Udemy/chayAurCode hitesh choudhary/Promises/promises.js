const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})
    .catch(function () {
        console.log("Not resolved")
    })

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chay", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;       // false karenge to object print nhi hoga --> must try
        if (!error) {
            resolve({ username: "Om", password: "1234" });
        }
        else {
            reject("apni custom Error: something went wrong!")
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected, kyuki finally humesha chalta hai"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;       // false karenge to object print nhi hoga --> must try
        if (!error) {
            resolve({ username: "Javascript", password: "1234" });
        }
        else {
            reject("apni custom Error: JS went wrong!")
        }
    }, 1000)
});

async function consumePromiseFive() {
    // await promiseFive        // ye error dega --> promise ek object hai to isko aise nhi likhte koi variable me store karwana padega
    const response = await promiseFive;
    console.log(response);
}

consumePromiseFive()



// async function getAllUsers() {
//     try {
//         const response = fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("D: ", error)
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))

