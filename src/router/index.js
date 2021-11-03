import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../views/Posts'
import Login from '../views/Login'
import Contact from '../views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
