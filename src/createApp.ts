import express from 'express';
import usersRouter from './routes/users';

export default function createApp() {
  const app = express();

  app.use('/api/users', usersRouter);

  return app;
}
