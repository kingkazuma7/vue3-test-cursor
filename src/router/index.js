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
    }
  ]
})

export default router 