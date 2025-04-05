import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

import express from 'express';
import { connectToDataBase } from './config/db';
import cors from 'cors';
import { APP_ORIGIN, NODE_ENV, PORT } from './constants/env';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/errorHandler';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
          origin: APP_ORIGIN,
          credentials: true,
}))
app.use(cookieParser())

app.get("/", async (req, res, next) => {
         try {
                   res.status(200).json({
                             message: "Avengers Assemble!",
                             "SENPOU": "mokuton"
                   })
         } catch (error) {
                     next(error)
         }
})
app.use(errorHandler)

app.listen(3000, async() => {
          console.log(`Server is running on PORT:${PORT} in ${NODE_ENV} mode`);
          await connectToDataBase()
})