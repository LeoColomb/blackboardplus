import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const AnnouncementList = () => import('../views/AnnouncementList.vue')
const CourseList = () => import('../views/CourseList.vue')
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/home', component: AnnouncementList },
      { path: '/announcements/:page(\\d+)?', component: AnnouncementList },
      { path: '/courses/:page(\\d+)?', component: CourseList },
      { path: '/item/:id(\\d+)', component: ItemView },
      { path: '/user/:id', component: UserView },
      { path: '/', redirect: '/home' }
    ]
  })
}
