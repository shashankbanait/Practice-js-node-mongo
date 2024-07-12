const express = require("express");
const cookieParser = require("cookie-parser")
const path = require('path');
const app = express();
const PORT = 8001;
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middleware/auth");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")

connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => console.log("connect ho gya"))
    .catch(() => { console.log("connect nhi ho paya") });

// setting the template engine: express ko batate hai ki hum ye template engine use kar rhe hai
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// json data aayega to uska data handle karne ke liye middleware
app.use(express.json());
// form data ko parse karne ke liye middleware
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());


app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/",  checkAuth, staticRoute)
app.use("/user", userRoute)


app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            {
                shortId
            }, {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    },
                },
            },
            { new: true }
        );

        if (!entry) {
            return res.status(404).send("URL not found");
        }

        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error("Error finding or updating URL:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
