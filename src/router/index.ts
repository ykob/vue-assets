import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/ViewHome.vue'),
  },
  {
    path: '/form-elements/',
    name: 'formElements',
    component: () =>
      import(
        /* webpackChunkName: "formElements" */ '../views/ViewFormElements.vue'
      ),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
