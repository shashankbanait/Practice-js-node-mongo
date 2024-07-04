const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
const {connectMongoDb} = require('./connection')
const { logReqRes } = require("./middlewares")

const userRouter = require("./routes/user")

// Connection
connectMongoDb("mongodb://localhost:27017/youtube-app-1")
.then(()=>{console.log("mongoDB connected");
    console.log("ha ho gya connect")
})
.catch(()=> {console.log("mongoDB not connected")})

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"))

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
