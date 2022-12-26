import Vue from 'vue'
import VueRouter from 'vue-router'
//layouts
import Home from '../views/pages/Home.vue'
import Flip from '../views/pages/Flip.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flip',
    name: 'Flip',
    component: Flip
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
