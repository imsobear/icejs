import React from 'react';
import { createApp, APP_MODE, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container'
  },
  logger: {
    level: APP_MODE === 'build' ? 'error' : 'debug',
  },
  router: {
    type: 'hash',
    fallback: <div>加载中...</div>
  },
  request: {
    timeout: 5000,
    baseURL: '/',
    interceptors: {
      request: {
        onConfig: (config) => {
          return config;
        }
      }
    }
  }
};

createApp(appConfig);
