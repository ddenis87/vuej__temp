import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/stack',
    name: 'Stack',
    component: () => import('../views/stack.vue')
  },
  {
    path: '/symbol',
    name: 'Symbol',
    component: () => import('../views/Symbol.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
