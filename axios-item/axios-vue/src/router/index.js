import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/get',
    name: 'Get',
    component: () => import('../views/Get.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/put',
    name: 'Put',
    component: () => import('../views/Put.vue')
  },
  {
    path: '/patch',
    name: 'Patch',
    component: () => import('../views/Patch.vue')
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import('../views/Delete.vue')
  },
  {
    path: '/all',
    name: 'All',
    component: () => import('../views/All.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/instance',
    name: 'Instance',
    component: () => import('../views/Instance.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
