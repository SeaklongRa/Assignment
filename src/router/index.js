import Vue from 'vue'
import VueRouter from 'vue-router'
import SumValue from '../views/SumValue.vue'
import AWeekOne from '../views/AWeekOne.vue'
import ClassAndStyle from '../views/ClassAndStyle.vue'
import TableData from '../views/TableData.vue'
import VforComponent from '../views/VforComponent.vue'
import EventHandling from '../views/EventHandling.vue'
import AWeekTwo from '../views/AWeekTwo.vue'
import TestComponent from '../views/TestComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/week',
    name: 'aweekone',
    component: AWeekOne
  },
  {
    path: '/sum',
    name: 'sumvalue',
    component: SumValue
  },
  {
    path: '/class',
    name: 'classandstyle',
    component: ClassAndStyle
  },
  {
    path: '/table',
    name: 'table',
    component: TableData
  },
  {
    path: '/vfor',
    name: 'vfor',
    component: VforComponent
  },
  {
    path: '/event',
    name: 'event',
    component: EventHandling
  },
  {
    path: '/',
    name: 'Week',
    component: AWeekTwo
  },
  {
    path: '/test',
    name: 'Test',
    component: TestComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
