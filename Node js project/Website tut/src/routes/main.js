const express = require("express");
const { route } = require("express/lib/application")

const Detail = require("../models/Detail")
const Slider = require("../models/Slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact")




const routes = express.Router();

routes.get("/", async (req, res)=>{
    const details = await Detail.findOne({"_id":"665858fdb97fd54d3f0dd19b"})
    const slides = await Slider.find();
    const services = await Service.find();
    // console.log(slides);
    // console.log(details)

    res.render("index", {
        details:details,
        slides:slides,
        services:services
    })
})

routes.get("/gallery", async (req, res)=>{
    const details = await Detail.findOne({"_id":"665858fdb97fd54d3f0dd19b"})
    res.render("gallery", {
        details:details,
    })
});

routes.post("/process-contact-form", async (request, response)=>{
    console.log("this form is submitted")
    console.log(request.body)
    
    // save the data to database
    try{
        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    }catch(e){
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes