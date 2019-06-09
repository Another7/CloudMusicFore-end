import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TwoLevelMenu from "@/components/TwoLevelMenu";
import Recommend from "@/components/Recommend";
import SheetDetail from "@/components/SheetDetail";
import Login from "@/components/Login";
import Register from "../components/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/twoLevelMenu',
      children: [
        {
          path: '/twoLevelMenu',
          name: 'twoLevelMenu',
          component: TwoLevelMenu,
          redirect: '/recommend',
          children: [
            {
              path: '/login',
              name: 'login',
              component: Login
            },
            {
              path: '/register',
              name: 'register',
              component: Register
            },
            {
              path: '/recommend',
              name: 'recommend',
              component: Recommend
            },
            {
              path: '/sheetDetail',
              name: 'sheetDetail',
              component: SheetDetail,
              meta: {
                requireAuth: true
              }
            }
          ]
        }
      ]
    }
  ]
})
