import { createRouter, createWebHistory } from 'vue-router'
import Home from "../Page/Home.vue";
import PageNout from "../Page/PageNotFound.vue";
import Apropos from "../Page/Apropos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Apropos
    },{
      path:"/:catchAll(.*)*",
      name:"notfound",
      component:PageNout
    }
  ]
})

export default router
