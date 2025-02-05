import mongoose, { mongo } from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionIsntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionIsntance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed!! ", error);
        process.exit(1)
    }
}

export default connectDB