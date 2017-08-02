import Vue from 'vue'
import Router from 'vue-router'

import tabBar from '@/components/tabBar'

import Home from '@/components/home'
import Classify from '@/components/classify'
import Discount from '@/components/discount'
import Cart from '@/components/cart'
import Mine from '@/components/mine'
//
import Login from '@/components/login'
import Exit  from '@/components/mine/exit'

import Today from '@/components/today'
import Notice from '@/components/notice'

import invincible from '@/components/leader/invincible'
import ticket from '@/components/leader/ticket'
import beauty from '@/components/leader/beauty'
import bonded from '@/components/leader/bonded'
import overseas from '@/components/leader/overseas'
import fashion from '@/components/leader/fashion'
import life from '@/components/leader/life'
import snacks from '@/components/leader/snacks'
import cloth from '@/components/leader/cloth'
import special from '@/components/leader/special'
import weeknews from '@/components/leader/weeknews'

import search from '@/components/search/search'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabBar',
      component: tabBar,
      //二级路由
      children:[
        {
          path:'home',
          name:'home',
          component:Home
        ,
          children:[
            {
              path:'invincible',
              name:'invincible',
              component:invincible
            },
            {
              path:'ticket',
              name:'ticket',
              component:ticket
            },
            {
              path:'beauty',
              name:'beauty',
              component:beauty
            },
            {
              path:'bonded',
              name:'bonded',
              component:bonded
            },
            {
              path:'overseas',
              name:'overseas',
              component:overseas
            },
            {
              path:'fashion',
              name:'fashion',
              component:fashion
            },
            {
              path:'life',
              name:'life',
              component:life
            },
            {
              path:'snacks',
              name:'snacks',
              component:snacks
            },
            {
              path:'cloth',
              name:'cloth',
              component:cloth
            },
            {
              path:'special',
              name:'special',
              component:special
            }
            ,
            {
              path:'weeknews',
              name:'weeknews',
              component:weeknews
            },
          ]
        },
        {
          path:'classify',
          name:'classify',
          component:Classify
        },
        {
          path:'discount',
          name:'discount',
          component:Discount,
          children:[
            {
              path:'today',
              name:'today',
              component:Today
            },
            {
              path:'notice',
              name:'notice',
              component: Notice
            }

          ]
        },
        {
          path:'cart',
          component:Cart,
          name:'cart'
        },
        {
          path:'mine',
          component:Mine,
          name:'mine'
        },
        {
          path:'login',
          component:Login,
          name:'login'
        },
        {
          path:'exit',
          component:Exit,
          name:'exit'
        }

      ]
    },
    {
      path:'/search',
      name:'search',
      component:search
    }


  ]
})
