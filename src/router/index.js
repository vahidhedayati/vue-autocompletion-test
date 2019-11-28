import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Welcome2 from '@/components/Welcome2'
import Complex from '@/components/Complex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/nonvalidation',
      name: 'nonvalidation',
      component: Welcome2
    },
    {
      path: '/complex',
      name: 'complex',
      component: Complex
    }
  ]
})
