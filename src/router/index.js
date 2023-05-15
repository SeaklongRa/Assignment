import Vue from 'vue'
import VueRouter from 'vue-router'
import SumValue from '../views/SumValue.vue'
import AWeekOne from '../views/AWeekOne.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'aweekone',
    component: AWeekOne
  },
  {
    path: '/src/views/SumValue.vue',
    name: 'sumvalue',
    component: SumValue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
