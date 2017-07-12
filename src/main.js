import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSocketio from 'vue-socket.io';
import App from './App';
import routes from './route-config';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueSocketio, 'http://127.0.0.1:3000');

const router = new VueRouter({
  mode: 'hash',
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
