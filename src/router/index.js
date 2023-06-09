import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewIndex from '../views/ViewIndex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ViewIndex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
