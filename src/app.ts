import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routers/index';

export const createApp = () => {
  const app = express();
  app.use(morgan("tiny"), express.json(), cors(), router);

  return app;
}