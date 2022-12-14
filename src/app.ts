import Koa from 'koa';
import { initRouter } from './routers/index.js';
import { initModel } from './models/index.js';
import { initMiddleware } from './middleware/index.js';
import configs from './config.js';

const { BASE_URL, PORT } = configs;

const app = new Koa();

initRouter(app);
initModel();
initMiddleware(app);

app.listen(PORT);

console.log(`đ ćŻćšć°ć: http://127.0.0.1:${PORT}${BASE_URL}`);
