const mockServer = require('./mock/server');

const {
  VUE_APP_BASE_URL,
  VUE_APP_SERVER_ENV,
  VUE_APP_OUTPUT_DIR = 'dist',
  VUE_APP_PUBLIC_PATH = '/',
} = process.env;

// 数据来源：本地mock
const mockDevServer = {
  port: 8081,
  before: (app) => app.use(mockServer()),
  disableHostCheck: true,
};

// 数据来源：后端服务器
const devServer = {
  port: 8080,
  proxy: {
    '/': {
      target: VUE_APP_BASE_URL,
    },
  },
  disableHostCheck: true,
};

module.exports = {
  outputDir: VUE_APP_OUTPUT_DIR,
  productionSourceMap: VUE_APP_SERVER_ENV !== 'production',
  publicPath: VUE_APP_PUBLIC_PATH,
  devServer: VUE_APP_SERVER_ENV === 'mock' ? mockDevServer : devServer,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/style/index.scss";',
      },
    },
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
};
