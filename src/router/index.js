import Vue from 'vue'
import Router from 'vue-router'
import Liste from '@/components/Liste'

import VueResource from 'vue-resource'
Vue.use(VueResource);


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Liste',
      component: Liste
    }
  ]
})
