const routes = require("./routes/main")
const hbs = require("hbs");
const express = require("express")

const app = express()

// static/css/style.css
app.use("/static", express.static("public"))
app.use("", routes)

// (template engine)
app.set("view engine", "hbs")
app.set("views", "views")


app.listen(process.env.PORT | 5556, ()=>{
    console.log("server started")
})