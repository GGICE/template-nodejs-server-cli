import type { Next, Context } from 'koa';

const hello = async (ctx: Context, next: Next) => {
  // Do something before
  console.log('Before');
  await next();
  console.log('After');
  // Do something after
};

export default hello;
