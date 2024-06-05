require("dotenv").config();
const mongoose = require("mongoose")

 const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
       console.log(`\n MongoDB connected  DB host ${connectionInstance.connection.host}`)
    } catch (error) {
      console.log("MongoDb connection error",error);
      process.exit(1);
      
    }
}


