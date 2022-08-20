import type Koa from 'koa';
import hello from '@/middleware/hello';

export const initMiddleware = (app: Koa) => {
  app.use(hello);
};
