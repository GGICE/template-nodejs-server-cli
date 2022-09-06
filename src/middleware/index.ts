import type Koa from 'koa';
import hello from './hello.js';

export const initMiddleware = (app: Koa) => {
  app.use(hello);
};
