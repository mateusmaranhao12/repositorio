import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Portfolio from '@/views/Portfolio.vue'

import Sobre from '@/components/Sobre.vue'
import Conhecimentos from '@/components/Conhecimentos.vue'
import Projetos from '@/components/Projetos.vue'
import Contato from '@/components/Contato.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio,
    redirect: '/sobre',
    children: [

      {
        path: 'sobre',
        name: 'Sobre',
        component: Sobre
      },

      {
        path: 'conhecimentos',
        name: 'Conhecimentos',
        component: Conhecimentos
      },

      {
        path: 'projetos',
        name: 'Projetos',
        component: Projetos
      },

      {
        path: 'contato',
        name: 'Contato',
        component: Contato
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
