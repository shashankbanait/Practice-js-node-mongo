try {
    const res = prompt("Are you a robot?");
    if(res=="y"){
        throw new Error("Robot found")
    }
} catch (error) {
    console.log(error.name, error.message);
}
finally{
    console.log("this is finally block")
}


// try {
//     console.log(age);
// } catch (error) {
//     console.log(error.message);
// }

// const a = 2*4;
// console.log(a);