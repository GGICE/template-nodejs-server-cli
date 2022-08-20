/**
 * 支持ts import 相对地址，编译成js后依然支持
 * 若开发 CLI 工具，请使用相对路径，使用 `@` 路径会有寻址异常
 */

import 'module-alias/register';
import { addAliases } from 'module-alias';
import path from 'path';

addAliases({
  '@': path.join(__dirname, '../'),
});
