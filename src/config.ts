import _ from 'lodash';

interface IMongoConfig {
  host: string;
  port: number;
  database: string;
  username?: string;
  password?: string;
}
interface IConfig {
  BASE_URL: string;
  PORT: number;
  MONGODB: IMongoConfig;
}

// 支持传入 config.json 配置文件，将会和默认配置合并
let insertConfig;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  insertConfig = require('./config.json');
} catch (e) {}

const env = process.env.NODE_ENV || 'development';
const configMap: { [key: string]: Partial<IConfig> } = {
  default: {
    BASE_URL: '',
    PORT: 7002,
    MONGODB: {
      host: '127.0.0.1',
      port: 27017,
      database: 'test',
    },
  },
  development: {},
  production: {},
};
const config: IConfig = _.merge(configMap.default, insertConfig || configMap[env]);

export default config;
