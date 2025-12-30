import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showHeader: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { showHeader: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { showHeader: false }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router