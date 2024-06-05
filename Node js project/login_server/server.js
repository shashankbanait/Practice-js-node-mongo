// mongodb
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
        console.log(`\nMongoDB connected: DB host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

connectDB();


const app = require("express")();
const port = 3000;



// for accepting post from data
const bodyParser = require("express").json;
app.use(bodyParser());

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})