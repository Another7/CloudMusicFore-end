import Vue from 'vue'
import vuex from 'vuex'
import userInfo from './userInfo'
import content from './content'

Vue.use(vuex);
export default new vuex.Store({
  modules: {
    userInfo: userInfo,
    content: content
  }
})
