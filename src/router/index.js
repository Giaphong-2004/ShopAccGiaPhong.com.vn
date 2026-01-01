import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import TopUp from '../views/TopUp.vue'
import TransactionHistory from '../views/TransactionHistory.vue'

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
  },
  {
    path: '/topup',
    name: 'TopUp',
    component: TopUp,
    meta: { showHeader: true }
  },
  {
    path: '/history',
    name: 'TransactionHistory',
    component: TransactionHistory,
    meta: { showHeader: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router