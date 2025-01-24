import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();


const connectDB = async () => {
    try {
        const DB_URL = process.env.DB_URL
        await mongoose.connect(DB_URL)
        console.log('Connected to DB')
    } catch (error) {
        console.log("error connecting to the databse :" + error)
    }
}

export default connectDB;


