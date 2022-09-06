import type Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import { index, getUser, addUser } from '../controllers/index.js';
import configs from '../config.js';

const { BASE_URL } = configs;

const router = new Router({
  prefix: BASE_URL,
});

export const initRouter = (app: Koa) => {
  router.get('/', index);
  router.get('/add-user', addUser);
  router.get('/add-user', getUser);

  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());
};
