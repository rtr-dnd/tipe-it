import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Texts from './components/Texts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/get-started',
    name: 'Get started',
    component: Login
  },
  {
    path: '/en',
    name: 'Home-en',
    component: Texts
  },
  {
    path: '/',
    name: 'Home',
    component: Texts
  },
  {
    path: '/ja',
    name: 'Home-ja',
    component: Texts
  }
  ]
})
