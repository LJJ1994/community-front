import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Publish from '@/components/publish/Publish'
import Message from '@/components/message/Message'
import Me from '@/components/me/Me'
import MeDetail from '@/components/me/components/meDetail'
import MeEdit from '@/components/me/components/edit'
import Find from '@/components/find/Find'

import Search from '@/components/home/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      component: Publish
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/me/detail',
      name: 'MeDetail',
      component: MeDetail
    },
    {
      path: '/me/edit',
      name: 'MeEdit',
      component: MeEdit
    }
  ]
})
