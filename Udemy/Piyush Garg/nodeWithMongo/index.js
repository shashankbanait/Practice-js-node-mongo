const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;

// Connection
mongoose
    .connect('mongodb://127.0.0.1:27017/youtube-app-1')
    .then(()=> console.log("mongoDB connected"))
    .catch((err)=> console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
});

const User = mongoose.model("user", userSchema);



app.post("/api/users", async(req, res)=>{
    const body = req.body;
    if(
        !body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title
    ){
        return res.status(400).json({msg: "All fields are required"})
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender, 
        jobTitle: body.job_title
    })
    console.log(result);
    return res.status(201).json({msg: "success"})
});