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

import leaderone from '@/components/leader/leaderone'



import search from '@/components/search/search'
import searchgoods from '@/components/search/searchgoods'

import enterGoods from '@/components/enterGoods'
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
          path:'/home',
          name:'home',
          component:Home,
          children:[
            {
              path:'/leaderone',
              name:'leaderone',
              component:leaderone
            }
          ]
        },

        {
          path:'/classify',
          name:'classify',
          component:Classify
        },
        {
          path:'/discount',
          name:'discount',
          component:Discount,
          children:[
            {
              path:'/',
              name:'today',
              component:Today
            },
            {
              path:'/notice',
              name:'notice',
              component: Notice
            },
            {
              path:'/entergoods',
              name:'/entergoods',
              component:enterGoods
            },
          ]
        },

        {
          path:'/cart',
          component:Cart,
          name:'cart'
        },
        {
          path:'/mine',
          component:Mine,
          name:'mine'
        },
        {
          path:'/login',
          component:Login,
          name:'login'
        },
        {
          path:'/exit',
          component:Exit,
          name:'exit'
        },
        {
          path:'/search',
          name:'search',
          component:search
        },

        {
          path:'/searchgoods',
          name:'/searchgoods',
          component:searchgoods
        }
      ]
    }
  ]
})
