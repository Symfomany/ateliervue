import Vue from 'vue'
import Router from 'vue-router'
import Liste from '@/components/Liste'
import Francais from '@/components/Francais'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Liste',
      component: Liste
    },
    {
      path: '/francais',
      name: 'Francais',
      component: Francais
    }
  ]
})
