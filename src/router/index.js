import Vue from 'vue'
import Router from 'vue-router'
import Index from '@page'
import teaSchool from '@page/school'
  import Detail from '@page/school/detail'
import Franchis from '@page/franchis'
import Goods from '@page/goods'
import My from '@page/my'

Vue.use(Router)

let routes = [
  
    {
      path: '/',
      redirect: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'teaSchool',
          component: teaSchool,
          meta: { navShow: true },
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail 
        }
      ]
    },
    {
      path: '/franchis',
      name: 'Franchis',
      component: Franchis,
      meta: { navShow: true }
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
      meta: { navShow: true }
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta: { navShow: true }
    }
    
]

const router = new Router({
  mode: 'hash',
  // base: __dirname,
  routes
})

export default router
