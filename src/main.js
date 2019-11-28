// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAutocompletion from 'vue-autocompletion'
import * as uiv from 'uiv'
import './assets/css/bootstrap.css'
import './assets/css/grails.css'
import './assets/css/main.css'
import { faPlus, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/**
 * You should be able to disable VeeValidate 2 lines below
 * this and still load up Welcome2.vue with no issues
 *
 **/
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate, { inject: false });






Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faPlus)
library.add(faPlusCircle)
library.add(faMinusCircle)


Vue.config.productionTip = false
Vue.use(VueAutocompletion)
Vue.use(uiv)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
