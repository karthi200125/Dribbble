import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import ProjectRoute from './Routes/ProjectRoute.js'
import { NextError } from './Utils/NextError.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// mongoose connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

// Routes
app.use('/api/auth', AuthRoute)
app.use('/api/user', UserRoute)
app.use('/api/project', ProjectRoute)

// Error middle ware
app.use(NextError)

app.listen(8080, () => {
    console.log('API WORKING');
});
