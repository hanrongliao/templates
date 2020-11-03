// 本目录下的组件均为全局组件
// 非全局组件应放在views目录下相应的page下

import Vue from 'vue';

function register(contexts) {
  contexts.keys().forEach((context) => {
    const module = contexts(context).default;
    Vue.component(module.name, module);
  });
}

register(require.context('./', false, /\.vue$/));
