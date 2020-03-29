import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Practise from '@/views/practise.vue'
import Commit from '@/views/commit'
import Production from '@/views/production'
import About from '@/views/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/practise',
      name: 'practise',
      component: Practise
    },
    {
      path: '/commit',
      name: 'commit',
      component: Commit
    },
    {
      path: '/production',
      name: 'production',
      component: Production
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
