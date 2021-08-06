import { createRouter, createWebHashHistory } from 'vue-router'
import Film from '../views/Film.vue'

const routes = [
  {
    path: '/film',
    name: 'Film',
    component: Film,
    children: [
      {
        path: '/film/current',
        name: 'Current',
        component: () => import('@/components/CurrentFilm.vue')
      }, {
        path: '/film/coming',
        name: 'ComingFilm',
        component: () => import('@/components/ComingFilm.vue')
      }, {
        path: '/film/',
        redirect: '/film/current'
      }
    ]
  }, {
    path: '/cinema',
    name: 'Cinema',
    component: () => import('@/views/Cinema.vue')
  }, {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User.vue')
  }, {
    path: '/detail/:filmId',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }, {
    path: '/',
    redirect: '/film'
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
