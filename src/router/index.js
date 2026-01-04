import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import VerifyOTP from '../views/VerifyOTP.vue'
import GameList from '../views/GameList.vue'
import GameDetail from '../views/GameDetail.vue'
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
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { showHeader: false }
  },
  {
    path: '/verify-otp',
    name: 'VerifyOTP',
    component: VerifyOTP,
    meta: { showHeader: false }
  },
  {
    path: '/games',
    name: 'GameList',
    component: GameList,
    meta: { showHeader: true }
  },
  {
    path: '/games/:id',
    name: 'GameDetail',
    component: GameDetail,
    meta: { showHeader: true }
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