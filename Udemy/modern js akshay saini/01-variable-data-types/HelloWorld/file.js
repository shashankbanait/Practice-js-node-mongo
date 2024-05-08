const fs = require('fs')

// Sync....
// fs.writeFileSync("./test.txt", "Hey there, i am using laptop");

// Asynchronous
// fs.writeFile("./text.txt", "Hello world Async", (err)=>{});

// Sync
// const result = fs.readFileSync("./contact.txt", "utf-8");      // utf-8: encoding technique
// console.log(result);

// Async
// const result = fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// });
// console.log(result);

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());     // append the date in file..... matlab usi file me add kar deta hai data

// fs.appendFileSync("./test.txt", `${Date.now()}Hey there\n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync('./test.txt'));     // is file ki details bata dega.... kab bana, uid, birth time etc.

// console.log(fs.statSync("test.txt").isFile())        // to check is this file?

fs.mkdirSync("my-docs/a");      // creates a folder named "my-docs" and inside it creates "a" named folder