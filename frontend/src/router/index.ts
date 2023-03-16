import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('@/layouts/auth-layout.vue'),
      children: [
        {
          path: '/',
          name: 'login',
          component: () => HomeView
        }
      ]
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('@/layouts/panel-layout.vue'),
      children: [
        {
          path: '/panel/usuarios',
          name: 'users',
          component: () => HomeView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/layouts/404-layout.vue')
    }
  ]
})

export default router
