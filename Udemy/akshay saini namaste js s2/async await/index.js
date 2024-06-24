// always returns a promise
const API_URL = "https://api.github.com/users/shashankbanait"
async function handlePromise(){
    const data = await fetch(API_URL);

    const result = await data.json()
    console.log(result)

    // fetch() => Response.json() => jsonValue

}
handlePromise();