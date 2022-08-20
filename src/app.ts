import './utils/paths';

import Koa from 'koa';
import { initRouter } from '@/routers';
import { initModel } from '@/model';
import { initMiddleware } from '@/middleware';
import configs from '@/config';

const { BASE_URL, PORT } = configs;

const app = new Koa();

initRouter(app);
initModel();
initMiddleware(app);

app.listen(PORT);

console.log(`🚀 启动地址: http://127.0.0.1:${PORT}${BASE_URL}`);
