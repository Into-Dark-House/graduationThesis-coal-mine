import Vue from 'vue'
import Router from 'vue-router'
import {
  asyncRouterMap
} from '@/config/router.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: asyncRouterMap
})
