import AboutComponentVue from '@/components/AboutComponent.vue'
import HomeComponentVue from '@/components/HomeComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponentVue
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponentVue
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router