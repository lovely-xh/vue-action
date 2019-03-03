// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import iView from 'iview'

import Routers from './router'
import App from './App'

import 'iview/dist/styles/iview.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)

const RouterConfig = {
	mode: 'history',
	routes: Routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
});
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

const store = new Vuex.Store({
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {

	}
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => {
  	return h(App)
  }
});
