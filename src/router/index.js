import Vue from 'vue'
import Router from 'vue-router'
import ValidationExample from '@/components/ValidationExample'
import NoneValidationExample from '@/components/NonValidationExample'
import Complex from '@/components/Complex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'validation',
      component: ValidationExample
    },
    {
      path: '/nonvalidation',
      name: 'nonvalidation',
      component: NoneValidationExample
    },
    {
      path: '/complex',
      name: 'complex',
      component: Complex
    }
  ]
})
