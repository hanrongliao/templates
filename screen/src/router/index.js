import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: () => ({ path: '/' }),
  },
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
