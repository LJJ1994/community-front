import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import Home from '@/components/home/Home'
import Publish from '@/components/publish/Publish'
import PublishCategory from '@/components/publish/components/category'
import Message from '@/components/message/Message'

import Me from '@/components/me/Me'
import MeDetail from '@/components/me/components/meDetail'
import MeEdit from '@/components/me/components/edit'
import MeCollect from '@/components/me/components/collect'
import MeHistory from '@/components/me/components/history'
import MeLogin from '@/components/me/components/login'
import MeRegister from '@/components/me/components/register'

import Reply from '@/common/post/reply'
import Find from '@/components/find/Find'
import PostDetail from '@/common/post/postDetail'

import Search from '@/components/home/components/search'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        name: 'Home',
        component: Home
      },
        {
          path: '/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/find',
          name: 'Find',
          component: Find
        },
        {
          path: '/publish',
          name: 'Publish',
          component: Publish,
          meta: {
            requiresAuth: true,
            // keepAlive: true
          }
        },
        {
          path: '/publish/category',
          name: 'PublishCategory',
          component: PublishCategory
        },
        {
          path: '/message',
          name: 'Message',
          component: Message,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/me',
          name: 'Me',
          component: Me
        },
        {
          path: '/me/login',
          name: 'MeLogin',
          component: MeLogin
        },
        {
          path: '/me/register',
          name: 'MeRegister',
          component: MeRegister
        },
        {
          path: '/me/detail',
          name: 'MeDetail',
          component: MeDetail,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/me/collect',
          name: 'Collect',
          component: MeCollect
        },
        {
          path: '/me/history',
          name: 'History',
          component: MeHistory
        },
        {
          path: '/me/detail/:currentTab',
          name: 'Detail',
          component: MeDetail
        },
        {
          path: '/me/edit',
          name: 'MeEdit',
          component: MeEdit
        },
        {
          path: '/post/:postId',
          name: 'PostDetail',
          component: PostDetail,
          // children: [
          //   {
          //     path: '/comment/:commentId',
          //     name: 'PostReply',
          //     component: Reply
          //   }
          // ]
        },
        {
          path: '/post/:commentId',
          name: 'PostReply',
          component: Reply
        }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem("token")
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
  }
  if (to.matched.some(record=>record.meta.requiresAuth) && (!token)) {
    alert('请登录')
    next({
      path: '/me/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

export default router
