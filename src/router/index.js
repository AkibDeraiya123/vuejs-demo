import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import contactView from '@/components/ContactView'
import SignupView from '@/components/SignupView'
import resetPasswordView from '@/components/reset-password'
import CreatePostView from '@/components/CreatePostView'
import ListPost from '@/components/ListPost'
import Authentication from '../auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/reset-password/:passwordString',
      name: 'reset',
      component: resetPasswordView
    },
    {
      path: '/creatPost',
      name: 'creatPost',
      beforeEnter: Authentication.requireAuth,
      component: CreatePostView
    },
    {
      path: '/listPost',
      name: 'listPost',
      component: ListPost
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: contactView
    }
  ]
})
