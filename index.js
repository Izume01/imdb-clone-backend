import express from 'express';
import connectDB from './config/connnectDB.js';
import router from "./routes/auth.js";
const app = express();

// Connecting to the Database
connectDB();

// MiddleWares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', router )

// Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});