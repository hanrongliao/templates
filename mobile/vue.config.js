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
      postcss: {
        plugins: [
          /* eslint-disable-next-line */
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 750, // 设计稿设定的屏宽
            unitPrecision: 8, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除)
            propList: [ // 能转化为vw的属性列表
              '*',
            ],
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['.ignore-'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false, // 是否允许在媒体查询中转换`px`
            replace: true, // 是否直接更换属性值，而不添加备用属性
            exclude: [/(\/|\\)(node_modules)(\/|\\)/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件
          }),
        ],
      },
    },
  },
  transpileDependencies: [], // babel-loader显式转译的依赖
};
