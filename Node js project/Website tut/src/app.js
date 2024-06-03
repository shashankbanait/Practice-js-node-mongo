const hbs = require("hbs");
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const routes = require("./routes/main")
const Detail = require("./models/Detail")
const Slides = require("./models/Slider")
const Service = require("./models/Service")
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({
    extended: true
}))
// static/css/style.css
app.use("/static", express.static("public"))
app.use("", routes)


// (template engine)
app.set("view engine", "hbs")
app.set("views", "views")

// same navbar ko har page par show karne ke liye hbs(handlebars: template engine)
hbs.registerPartials("views/partials")

// db connections
mongoose.connect("mongodb://localhost/website_tut", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("db connected");

    // Service.create([
    //     {
    //         icon: "fab fa-accusoft",
    //         title: "Provide Best Courses",
    //         description: "We provide world class courses",
    //         linkText: "https://www.github.com/shashankbanait",
    //         link: "Check"
    //     },
    //     {
    //         icon: "fab fa-affiliatetheme",
    //         title: "Learn projects effectively",
    //         description: "Projects provided by us",
    //         linkText: "https://www.github.com/shashankbanait",
    //         link: "Learn"
    //     },
    //     {
    //         icon: "fab fa-affiliatetheme",
    //         title: "Learn projects effectively",
    //         description: "Projects provided by us",
    //         linkText: "https://www.github.com/shashankbanait",
    //         link: "Learn"
    //     }
    // ])





    // Slider.create([
    //     {
    //         title: "Learn Java in very easy manner",
    //         subTitle: "Java is one of the most popular programming language",
    //         imageUrl: "/static/images/s1.jpg"
    //     },
    //     {
    //         title: "What is Django in python",
    //         subTitle: "Django is most famous framework of python",
    //         imageUrl: "/static/images/s2.jpg"
    //     },
    //     {
    //         title: "What about node js",
    //         subTitle: "Node js is runtime server environment to execute javascript outside the browser",
    //         imageUrl: "/static/images/s3.jpg"
    //     }
    // ])

    // Detail.create({
    //     brandName: "Info Technical Solution",
    //     brandIconUrl: "https://media.licdn.com/dms/image/D4D03AQGGVgsjTZf4AQ/profile-displayphoto-shrink_200_200/0/1708884544443?e=2147483647&v=beta&t=iVNxZy500sTFl2HP8J6y3mJordUqAxmYZkqQUws2Iz4",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             lable: "Contact",
    //             url: "/contact"
    //         }
    //     ]
    // })
})
.catch((error) => {
    console.error("db connection error:", error);
});


app.listen(process.env.PORT | 5556, ()=>{
    console.log("server started")
})