import Vue from 'vue'
import Router from 'vue-router'
import about from '../pages/index/about.vue'
import rule from '../pages/index/rule.vue'
import Buyers from '../pages/buyers'
import money from '../pages/index/money'
import home from '../pages/index/home'
import greatpeo from '../pages/index/greatpeo'
import schoolgood from '../pages/index/schoolgood'
import schoolgreat from '../pages/index/schoolgreat'
import Seller from '../pages/seller'

import All from '../pages/buyers/children/class0.vue'
import Class1 from '../pages/buyers/children/class1.vue'
import Class2 from '../pages/buyers/children/class2.vue'
import Class3 from '../pages/buyers/children/class3.vue'
import Class4 from '../pages/buyers/children/class4.vue'
import Class5 from '../pages/buyers/children/class5.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: money,
      children:[{
        path: '/',
        component: home
      },
      {
        path: 'good',
        component: home
      },{
        path: 'great',
        component: home
      },{
        path: 'better',
        component: home
      }]
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/buyers',
      name: 'buyers',
      component: Buyers,
      children: [
        {
          path: '/buyers/',
          redirect: '/buyers/All'
        },
        {
          path: '/buyers/All',
          component: All
        },
        {
          path: '/buyers/class1',
          component: Class1
        },
        {
          path: '/buyers/class2',
          component: Class2
        },
        {
          path: '/buyers/class3',
          component: Class3
        },
        {
          path: '/buyers/class4',
          component: Class4
        },
        {
          path: '/buyers/class5',
          component: Class5
        }
      ]
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})
