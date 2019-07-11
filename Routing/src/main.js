import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  //this replaces the hashtag in the URL
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
