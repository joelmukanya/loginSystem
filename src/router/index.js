import { createRouter, createWebHistory } from 'vue-router'
import Fruits from '../views/Fruits.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/signup/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/fruits',
    name: 'fruits',
    component: Fruits
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
