import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import UsersPage from '../views/UsersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/users',
      name: 'users',
      component: UsersPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  let isAuth = localStorage.getItem('access_token')
  if (!to.name) {
    if (isAuth) {
      next({ name: 'users' })
    } else {
      next({ name: 'register' })
    }
  } else {
    if (isAuth && to.name === 'register') {
      next({ name: 'users' })
    } else if (!isAuth && to.name === 'users') {
      next({ name: 'register' })
    } else {
      next()
    }
  }
})

export default router
