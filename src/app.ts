/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { globalErrorHandler } from './app/middlwares/globalErrorHandler';
import router from './app/routes';


const app: Application = express()

// Perser
app.use(express.json());
app.use(cors({origin: 'http://localhost:5173', credentials: true}));

app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Add global error handler middlwares
app.use(globalErrorHandler as (err: any, req: Request, res: Response, next: NextFunction) => void)

export default app;