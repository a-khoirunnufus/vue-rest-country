import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main.vue'
import Details from './components/Details.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/country/:id',
    name: 'country',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
