import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en' //  支持英文

import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';

import '@/icons'; // icon
import '@/permission'; // permission control

/**
 * mock环境下接口数据将被mock拦截
 */
if (process.env.NODE_ENV === 'mock') {
  const { mockXHR } = require('../mock');
  mockXHR();
}

// 英文版
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
