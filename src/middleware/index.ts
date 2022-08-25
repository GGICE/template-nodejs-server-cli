import type Koa from 'koa';
import hello from '../middleware/hello.js';

export const initMiddleware = (app: Koa) => {
  app.use(hello);
};
