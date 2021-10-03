import router from './router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../../index.html'
import About from '../../../pages/about.html'


const routes = [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  


