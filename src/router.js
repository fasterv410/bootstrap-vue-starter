import Vue from 'vue'
import Router from 'vue-router'

// Home component
import Home from './views/Home'

// Layout components
import AppHeader from '@/components/Layouts/AppHeader'
import AppFooter from '@/components/Layouts/AppFooter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: AppHeader,
        default: Home,
        navigator: AppFooter
      }
    }
  ],
  // Set scroll top 0
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
