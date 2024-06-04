const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
const mongoose = require("mongoose");

const userRouter = require("./routes/user")

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo error", err));

// Schema


// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this line to parse JSON bodies

app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware 2");
    next();
});

// Routes
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
