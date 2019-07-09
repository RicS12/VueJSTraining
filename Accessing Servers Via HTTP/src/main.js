import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
//Setting global vue resource
Vue.http.options.root = 'https://vuejs-http-c1c50.firebaseio.com/';
//Interceptors, an array of functions
//Intercepting Requests
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  //Intercepting Response to make Get Data function again
  next(response => {
    response.json = () => { return {messages: response.body}}
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
