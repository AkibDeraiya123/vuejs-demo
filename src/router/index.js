import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import contactView from '@/components/ContactView'
import resetPasswordView from '@/components/reset-password'
import CreatePostView from '@/components/CreatePostView'
import ListPost from '@/components/ListPost'
import Authentication from '../auth'
import EmailVerifyView from '@/components/EmailVerifyView'
import PageNotFoundView from '@/components/PageNotFoundView'
import HomeAfterLoginView from '@/components/HomeAfterLoginView'
import MyProfileView from '@/components/myProfileView'
import friendListView from '@/components/friendListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Authentication.isLoggedIn() ? HomeAfterLoginView : HomeView
    },
    {
      path: '/reset-password/:passwordString',
      name: 'reset',
      component: resetPasswordView
    },
    {
      path: '/email-verify/:emailHash',
      name: 'emailVerify',
      component: EmailVerifyView
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
    },
    {
      path: '/profile/:name',
      name: 'profile',
      component: Authentication.requireAuth ? MyProfileView : HomeView
    },
    {
      path: '/suggested-friend',
      name: 'suggested-friends',
      component: Authentication.requireAuth ? friendListView : HomeView
    },
    {
      path: '*',
      component: PageNotFoundView
    }
  ]
})
