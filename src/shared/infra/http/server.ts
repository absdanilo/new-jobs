import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes/index';
import AppError from '@shared/errors/AppError';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(express.json());
app.use(routes);


app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    // status: 'error',
    // message: 'Internal server error',
    err: err.message
  });
});

app.listen(3333, () => {
  console.log('Jobs Abstartups is running!');
});