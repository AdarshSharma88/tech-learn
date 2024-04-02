import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import ErrorMiddleware from './middlewares/Error.js';
config({
    path: "./config/config.env",
  });
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
    
}));
import course from './routes/courseRoutes.js';
import user from './routes/userRoutes.js';
import payment from "./routes/paymentRoutes.js"
import people from './routes/peopleRoutes.js';
app.use(cookieParser());
app.use("/api/v1",user);
app.use("/api/v1",course);
app.use("/api/v1",payment);
app.use("/api/v1",people)
app.get("/",(req,res)=>res.send(`<h1>Server Working</h1>`))

export default app;

app.use(ErrorMiddleware);