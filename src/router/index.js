import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import SignupView from '@/components/SignupView'
import LoginView from '@/components/LoginView'
import CreatePostView from '@/components/CreatePostView'
import ListPost from '@/components/ListPost'

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
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/creatPost',
      name: 'creatPost',
      component: CreatePostView
    },
    {
      path: '/listPost',
      name: 'listPost',
      component: ListPost
    }
  ]
})
