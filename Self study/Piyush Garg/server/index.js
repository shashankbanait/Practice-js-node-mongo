const http = require('http');
// const fs = require('fs');
// const url = require("url");
const express = require("express");

const app = express();
app.get('/', (req, res)=> {
    return res.send("Hello from home page");
})

app.get("/about", (req, res)=>{
    return res.send("Hello from about page " + "hey " + req.query.name + " your age is "+ req.query.age);
})

const myServer = http.createServer(app);
app.listen(8000, ()=>console.log("Server start ho gya hai....."));

// jab bhi koi request aati hai to humara callback function run karega, aur req parameter me request ka sara data rahega
// aur
function myHandler(req, res){    // createServer() function humare liye server bana deta hai
    if(req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) =>{
        switch (req.url) {
            case "/": res.end("homepage");    
            break;

            case "/about": res.end("I am Spider man");    
            break;

            default: res.end("404 page available nhi hai")
                break;
        }
        res.end("Hello from server");

    });
}

// myServer.listen(8000, ()=> console.log("Server Started!"))       // 8000 port par request ko listen karwana hai
