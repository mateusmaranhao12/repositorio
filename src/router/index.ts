import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Portfolio from '@/views/Portfolio.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
