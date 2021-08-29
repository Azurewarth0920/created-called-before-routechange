import { createRouter, createWebHistory } from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'

import A from '@/pages/a.vue'
import B from '@/pages/b.vue'

const RouterLayout = createRouterLayout(layout => {
  // Resolves a layout component with layout type string.
  return import('@/layouts/' + layout + '.vue')
})

const routes = [
  {
    path: '/',
    component: RouterLayout,
    children: [
      {
        path: '/a',
        name: 'a',
        component: A,
      },
      {
        path: '/b',
        name: 'b',
        component: B,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
