// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import 'es6-promise/auto'
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
// Vue.use(Vuex);
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.userInfo.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
