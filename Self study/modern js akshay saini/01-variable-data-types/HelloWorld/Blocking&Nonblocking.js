const fs = require("fs");

// In case of Blocking
// console.log(1);
// const result = fs.readFileSync("contact.txt", "utf-8")
// console.log(result);
// console.log(2);

// Output:
// 1
// Arnold schedveneger: +911234567890
// John cena: +910987654321
// 2



// In case of Non-Blocking
// console.log(1);
// fs.readFile("contact.txt", "utf-8", (err, result) => {
//     console.log(result);
// })
// console.log(2);

// Output:
// 1
// 2
// Arnold schedveneger: +911234567890
// John cena: +910987654321


const os = require('os');
console.log(os.cpus().length);