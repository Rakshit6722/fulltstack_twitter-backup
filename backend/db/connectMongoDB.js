import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
console.log(process.env.MONGO_URI)
const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connect to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
