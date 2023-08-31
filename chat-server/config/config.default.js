/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1693357196364_8312';

  // add your middleware config here
  config.middleware = ['auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'yw20000410',
        // 数据库名
        database: 'chat',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    jwt: {
      secret: 'your secret key',
      expiresIn: '1h',
      whiteList: ['/login']
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
