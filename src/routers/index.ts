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
  // 方便演示，都使用 GET 方法
  router.get('/user/add', addUser);
  router.get('/user/get', getUser);

  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());
};
