import type { Context } from 'koa';
import * as userService from '../services/user.js';

export const index = async (ctx: Context) => {
  ctx.body = 'Hello world !';
};

export const addUser = async (ctx: Context) => {
  try {
    ctx.body = await userService.addUser(`test-${new Date()}`);
  } catch (e) {
    ctx.body = e;
  }
};

export const getUser = async (ctx: Context) => {
  try {
    ctx.body = await userService.getUser();
  } catch (e) {
    ctx.body = e;
  }
};
