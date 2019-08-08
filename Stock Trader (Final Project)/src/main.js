import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
//importing store (central state manager)
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-e8c08.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  //to not have hashtags in URL
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  //adding router
  router,
  //adding store
  store,
  render: h => h(App)
})

//npm install --save-dev babel-preset-stage-2 TO INSTALL BABEL PRESET STAGE 2, WHICH ALLOWS USE
// OF SPREAD OPERATOR INSIDE OF VUEJS OBJECT
//After installation, go to .babelrc