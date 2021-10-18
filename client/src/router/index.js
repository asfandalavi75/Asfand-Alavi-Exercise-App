import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CalorieCounter from '../views/calorieCounter.vue'
import Snacks from '../views/Snacks.vue'
import Exercises from '../views/Exercises.vue'
import Profile from '../views/Profile.vue'
import Recipes from '../views/Recipes.vue'
import Share from '../views/Share.vue'
import Session from '../services/session';




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/snacks',
    name: 'Snacks',
    component: Snacks
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: Exercises
  },
  {
    path: '/share',
    name: 'Share',
    component: Share
  },
  {
    path: '/calorie',
    name: 'CalorieCounter',
    component: CalorieCounter
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresLogin && !Session.user){
      next('/login');
  }else{
      next();
  }
} )

export default router
