const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.get("/", (req, res)=>{
    const stream = fs.createReadStream("./sample.txt", "utf-8");
    stream.on("data", (chunk)=> res.write(chunk));
    stream.on("end", ()=> res.end());

    // fs.readFile("./sample.txt", (err, data)=>{
    //     res.end(data);
    // });
});  

app.listen(PORT, ()=> {
    console.log(`Server started at port: ${PORT}`);
}) 