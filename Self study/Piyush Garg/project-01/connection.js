const mongoose = require("mongoose");
mongoose.set("strictQuery", true)

async function connectMongoDb(url) {
    // Connection
    mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
};