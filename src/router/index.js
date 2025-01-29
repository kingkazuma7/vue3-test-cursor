import { createRouter, createWebHistory } from 'vue-router'
import Tutorial from '../components/tutorial/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/tutorial/',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '/tutorial/chap1',
      name: 'chapter1',
      component: () => import('../components/tutorial/Chapter1.vue')
    },
    {
      path: '/tutorial/chap2',
      name: 'chapter2',
      component: () => import('../components/tutorial/Chapter2.vue')
    }
  ]
})

export default router 